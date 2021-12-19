import { Component, Input, OnChanges } from '@angular/core';
import { IExternalGame } from '../../games.service.interface';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faChartLine, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { GamesService } from '../../games.service';

/**
 * Displays a game's name, decomp progress, and links.
 */
@Component({
  selector: 'external-game',
  templateUrl: './external-game.component.html',
  styleUrls: ['./external-game.component.scss']
})
export class ExternalGameComponent implements OnChanges {

  constructor(private gamesService: GamesService) { }

  /**
   * The game data to use.
   */
  @Input() data: IExternalGame;
  /**
   * Shield data
   */
  shield: string;
  /**
   * The percentage to display for completion.
   */
  total: string;
  /**
   * Icon definition.
   */
  github = faGithub;
  /**
   * Icon definition.
   */
  external = faExternalLinkAlt;
  chart = faChartLine;

  ngOnChanges(): void {
    this.gamesService.getGameShield(`${this.data.shieldURL}`).subscribe(
      res => this.total = res.message,
      err => console.error(err)
    );
  }

}
