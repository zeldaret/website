import { KeyValue } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { GamesService } from 'src/app/games/games.service';
import { IProject } from 'src/app/games/games.service.interface';

/**
 * A single project displayed in a box, alongside a graph.
 */
@Component({
  selector: 'game-project',
  templateUrl: './game-project.component.html',
  styleUrls: ['./game-project.component.scss']
})
export class GameProjectComponent implements OnInit {

  constructor(private gamesService: GamesService) { }

  /**
   * The index of the project. Used with n64-box.
   */
  @Input() index: number = 0;
  /**
   * Project information.
   */
  @Input() project: IProject = null;
  /**
   * The date time string for when this project was last updated
   */
  lastUpdate: string =  "";
  /**
   * The simple number showing the total progress on the project.
   */
  total: number = null;
  /**
   * Separate project metrics parsed from the CSV.
   */
  metrics: {[key: string]: string | number} = {};

  ngOnInit(): void {
    this.gamesService.getProjectCSV(this.project.matched).subscribe(
      res => {
        const points = res.split("\n");
        const latestPoint = points[points.length - 2];
        const column = latestPoint.split(",");
        //const version = column[0];
        this.lastUpdate = new Date(column[1]).toString();
        //const hash = column[2];

        let total: number = 0;
        for (const columnDef of this.project.columns) {
          switch(columnDef.type) {
            case "int":
            case "percent": {
              const data = +column[columnDef.index as number];
              const text = columnDef.display
                .replace("{0}", data.toString());
              this.metrics[columnDef.name] =
                columnDef.type === "int" ? data : `${data.toFixed(2)}%`;

              break;
            }
            case "percent_int": {
              const data: number[] = [
                +column[columnDef.index[0]],
                +column[columnDef.index[1]]
              ]
              total += data[1];
              const percent = data[0] / data[1];
              const text = columnDef.display
                .replace("{0}", data[0].toString())
                .replace("{1}", data[1].toString())
                .replace("{2}", percent.toString());
              this.metrics[columnDef.name] = `${(percent * 100).toFixed(2)}%`;

              break;
            }
            case "total": {
              console.warn(column);
              const data: number[] = [
                +column[columnDef.index as number],
                total
              ];
              total = 0;
              this.total = data[0] / data[1];
              const text = columnDef.display
                .replace("{0}", data[0].toString())
                .replace("{1}", data[1].toString())
                .replace("{2}", this.total.toString());

              break;
            }
          }
        }

        if (this.total === null) {
          this.total = +column[this.project.columns[0].index as number];
        }
        if (this.total > 1) {
          this.total /= 100;
        }
      },
      err => console.error(err)
    );
  }

  originalOrder(a: KeyValue<any, any>, b: KeyValue<any, any>): number {
    return 0;
  }

}
