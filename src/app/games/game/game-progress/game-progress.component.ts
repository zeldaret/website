import { KeyValue } from '@angular/common';
import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { GamesService } from 'src/app/games/games.service';
import { IGame } from 'src/app/games/games.service.interface';

/**
 * A single project displayed in a box, alongside one or more graphs.
 */
@Component({
  selector: 'game-progress',
  templateUrl: './game-progress.component.html',
  styleUrls: ['./game-progress.component.scss']
})
export class GameProgressComponent implements OnChanges {

  constructor(private gamesService: GamesService) { }

  /**
   * Game object which holds info on how to parse the CSV data.
   */
  @Input() game: IGame = null;

  /**
   * The date time string for when this project was last updated
   */
  lastUpdate: string =  "";
  /**
   * The simple numbers showing the total progress on respective charts.
   */
  totals: {[key: string]: number[]}[] = [];
  /**
   * Separate project metrics parsed from the CSV.
   */
  metrics: {[key: string]: number[]}[] = [];
  /**
   * Raw matched CSV data for use with the chart.
   */
  matched: string;
  /**
   * Raw unmatched CSV data for use with the chart.
   */
  unmatched: string;

  ngOnChanges(): void {
    forkJoin({
      matched: this.gamesService.getGameCSV(this.game.matched),
      unmatched: this.gamesService.getGameCSV(this.game.unmatched)
    }).subscribe(
      ({matched, unmatched}) => {
        // reset on page load
        this.totals = [];
        this.metrics = [];
        this.lastUpdate = null;

        this.matched = matched;
        this.unmatched = unmatched;

        for (const _ of this.game.charts) {
          this.metrics.push({});
        }

        for (const data of [matched, unmatched]) {
          const points = data.split("\n").filter((line) => line != "");
          const latestPoint = points[points.length - 1];
          const column = latestPoint.split(",");
          if (this.lastUpdate === null) {
            this.lastUpdate = new Date(+column[1] * 1000).toLocaleString();
          }

          for (const chart of this.game.charts) {
            this.totals.push({ [chart.series[0].metric]: [] });
          }

          let c = 0;
          for (const chart of this.game.charts) {
            let i = chart.index;
            this.totals[c][chart.series[0].metric].push(+column[i] / +column[i+1]);
            i += 2;

            for (const serie of chart.series.slice(1)) {
              if (!(serie.metric in this.metrics[c])) {
                this.metrics[c][serie.metric] = [];
              }
              this.metrics[c][serie.metric].push(+column[i] / +column[i+1]);
              i += 2;
            }

            c += 1;
          }
        }
      },
      err => console.error(err)
    );
  }

  originalOrder(a: KeyValue<any, any>, b: KeyValue<any, any>): number {
    return 0;
  }

}
