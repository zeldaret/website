import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IGame } from '../../games.service.interface';
import { faGithub, faTrello } from '@fortawesome/free-brands-svg-icons';
import { GamesService } from '../../games.service';

/**
 * Displays a game's name, decomp progress, and links.
 */
@Component({
  selector: 'game-summary',
  templateUrl: './game-summary.component.html',
  styleUrls: ['./game-summary.component.scss']
})
export class GameSummaryComponent implements OnChanges {

  constructor(private gamesService: GamesService) { }

  /**
   * The game data to use.
   */
  @Input() data: IGame;
  /**
   * The percentage to display for completion.
   */
  total: number;
  /**
   * Icon definition.
   */
  github = faGithub;
  /**
   * Icon definition.
   */
  trello = faTrello;

  ngOnChanges(): void {
    // Matching is second
    this.gamesService.getGameCSV(this.data.csvs.matching).subscribe(
      res => {
        const points = res.split("\n").filter((line) => line != "");
        const latestPoint = points[points.length - 1];
        const column = latestPoint.split(",");

        let i = this.data.progressMeta[0].index;
        this.total = +column[i] / +column[i + 1];
      },
      err => console.error(err)
    );
  }

}
