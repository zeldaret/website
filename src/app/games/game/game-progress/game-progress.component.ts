import { KeyValue } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { GamesService } from 'src/app/games/games.service';
import { IChart } from 'src/app/games/games.service.interface';

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
  @Input() meta: IChart = null;
  /**
   * CSV data.
   */
  @Input() csvData: string[] = [];

  /**
   * The date time string for when this project was last updated
   */
  lastUpdate: string = "";
  /**
   * The simple numbers showing the total progress on respective charts.
   */
  totals: number[] = [];
  /**
   * Separate project metrics parsed from the CSV.
   */
  metrics: { [key: string]: number[] } = {};


  ngOnChanges(): void {
    // don't do anything until all inputs are provided
    if (typeof this.csvData !== "object" || typeof this.meta !== "object") {
      return;
    }

    // reset on page load
    this.totals = [];
    this.metrics = {};
    this.lastUpdate = null;

    // Collect the latest numbers from the CSV data
    for (let k = 0; k < this.meta.series.length; k++) {
      const data = this.csvData[k];

      const points = data.split("\n").filter((line) => line != "");
      const latestPoint = points[points.length - 1];
      const column = latestPoint.split(",");
      if (this.lastUpdate === null) {
        this.lastUpdate = new Date(+column[1] * 1000).toLocaleString();
      }

      let i = this.meta.index;
      this.totals.push(+column[i] / +column[i + 1]);
      i += 2;
      
      for (const subdivision of this.meta.subdivisions.slice(1)) {
        if (!(subdivision.metric in this.metrics)) {
          this.metrics[subdivision.metric] = [];
        }
        this.metrics[subdivision.metric].push(+column[i] / +column[i + 1]);
        i += 2;
      }
      
    }
  }


  originalOrder(a: KeyValue<any, any>, b: KeyValue<any, any>): number {
    return 0;
  }

}
