import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Options, PointOptionsObject } from 'highcharts';
import { IChart } from 'src/app/games/games.service.interface';

/**
 * The container for a HighCharts chart.
 */
@Component({
  selector: 'game-chart',
  templateUrl: './game-chart.component.html',
  styleUrls: ['./game-chart.component.scss']
})
export class GameChartComponent implements OnChanges {

  constructor() { }

  /**
   * The matched CSV data to use for this chart.
   */
  @Input() matched: string = null;
  /**
   * The unmatched CSV data to use for this chart.
   */
  @Input() unmatched: string = null;
  /**
   * The chart metadata stored in the game settings.
   */
  @Input() metadata: IChart = null;
  /**
   * The HighCharts chart instance.
   */
  chart: Chart = null;

  ngOnChanges(): void {
    // don't do anything until all inputs are provided
    if (typeof this.matched !== "string" || typeof this.unmatched !== "string" || typeof this.metadata !== "object") {
      return;
    }

    // set up chart data
    const metadata = this.metadata;
    let matchedData = this.parseData(this.matched);
    let unmatchedData = this.parseData(this.unmatched);

    let joined = Array.prototype.concat(matchedData, unmatchedData);
    joined.sort((a, b) => a["y"] - b["y"]);
    const interval = 1 / 5;
    const max = Math.max(interval, Math.ceil(joined.slice(-1)[0].y / interval) * interval);

    const options: Options = {
      chart: { type: "line" },
      title: { text: this.metadata.title },
      subtitle: { text: this.metadata.subtitle },
      tooltip: {
        formatter: function() {
          const data = this.point.options;
          let tooltip = "";

          tooltip += `Date: ${new Date(data.x).toLocaleString()}<br/>\n`;
          tooltip += `Commit: ${data["commit"]}<br/>\n`
          tooltip += `Total ${metadata.series[0].metric}: ${(+data.y * 100).toFixed(2)}%<br/>\n`
          tooltip += `-------------------------------------------<br/>\n`;

          for (let i = 0; i < metadata.series.length - 1; i += 1) {
            const text = metadata.series[i + 1].description
              .replace("{0}", data["metrics"][i][0])
              .replace("{1}", data["metrics"][i][1])
              .replace("{2}", (+data["metrics"][i][2] * 100).toFixed(2));
            tooltip += `${text}<br/>\n`;
          }

          return tooltip;
        }
      },
      xAxis: {
        title: { text: "Date" },
        type: "datetime"
      },
      yAxis: {
        title: { text: "Completion (%)" },
        labels: { formatter: function() { return `${(+this.value * 100).toFixed(2)}%`; } },
        max: max
      },
      series: [
        {
          type: "line",
          name: "Non-matched",
          data: unmatchedData,
          color: "#ffc107"
        },
        {
          type: "line",
          name: "Matched",
          data: matchedData,
          color: "#01ce47"
        }
      ],
    };

    if (this.chart === null) {
      this.chart = new Chart(options);
    }
    else {
      this.chart.ref.update(options, true);
    }
  }

  private parseData(data: string): PointOptionsObject[] {
    const seriesData = [];

    for (const line of data.split("\n").filter((line) => line != "")) {
      const columns = line.split(",");

      const x = +columns[1] * 1000; // timestamp
      const commit = columns[2];

      let i = this.metadata.index;
      const y = +columns[i] / +columns[i + 1]; // total percentage
      i += 2;

      const metrics = [];
      for (const _ in this.metadata.series.slice(1)) {
        const numerator = +columns[i];
        const denominator = +columns[i + 1];
        const percent = numerator / denominator;

        metrics.push([numerator, denominator, percent]); // params for the description string
        i += 2;
      }

      seriesData.push({
        x: x,
        y: y,
        commit: commit,
        metrics: metrics
      });
    }

    return seriesData;
  }

}
