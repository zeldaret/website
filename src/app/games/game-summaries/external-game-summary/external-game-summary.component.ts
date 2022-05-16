import { Component, Input, OnChanges } from '@angular/core';
import { IExternalGame } from '../../games.service.interface';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faChartLine, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { GamesService } from '../../games.service';

/**
 * Displays an externally-linked game's name, decomp progress, and links.
 */
@Component({
  selector: 'external-game-summary',
  templateUrl: './external-game-summary.component.html',
  styleUrls: ['./external-game-summary.component.scss']
})
export class ExternalGameSummaryComponent implements OnChanges {

  constructor(private gamesService: GamesService) { }

  /**
   * The game data to use.
   */
  @Input() data: IExternalGame;
  /**
   * Shield data.
   */
  shield: string;
  /**
   * The percentage to display for completion.
   */
  total?: string;
  /**
   * Icon definitions.
   */
  github = faGithub;
  external = faExternalLinkAlt;
  chart = faChartLine;

  ngOnChanges(): void {
    
    if (this.data.shieldURL) {
      this.gamesService.getGameShield(`${this.data.shieldURL}`).subscribe(
        res => this.total = res.message,
        err => console.error(err)
      );
    }
  }

}
