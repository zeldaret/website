import { KeyValue } from '@angular/common';
import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
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
  totals: {[key: string]: number}[] = [];
  /**
   * Separate project metrics parsed from the CSV.
   */
  metrics: {[key: string]: string | number}[] = [];
  /**
   * Raw CSV data for use with the chart.
   */
  data: string;

  ngOnChanges(): void {
    this.gamesService.getGameCSV(this.game.progress).subscribe(
      res => {
        // reset on page reload
        this.totals = [];
        this.metrics = [];

        this.data = res;
        const points = res.split("\n").filter((line) => line != "");
        const latestPoint = points[points.length - 1];
        const column = latestPoint.split(",");
        this.lastUpdate = new Date(+column[1] * 1000).toLocaleString();

        let c = 0;
        for (const chart of this.game.charts) {
          let i = chart.index;
          this.totals.push({ [chart.series[0].metric]: (+column[i] / +column[i+1])});
          i += 2;

          this.metrics.push({});
          for (const serie of chart.series.slice(1)) {
            this.metrics[c][serie.metric] = (+column[i] / +column[i+1]);
            i += 2;
          }

          c += 1;
        }
      },
      err => console.error(err)
    );
  }

  originalOrder(a: KeyValue<any, any>, b: KeyValue<any, any>): number {
    return 0;
  }

}
