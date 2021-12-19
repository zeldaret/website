import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { IGame, IExternalGame } from '../games.service.interface';

/**
 * Container for all game summaries.
 */
@Component({
  selector: 'game-summaries',
  templateUrl: './game-summaries.component.html',
  styleUrls: ['./game-summaries.component.scss']
})
export class GameSummariesComponent implements OnInit {

  constructor(private gamesService: GamesService) { }

  /**
   * List of games to use for "GameSummary" components.
   */
  games: IGame[] = [];
  /**
   * List of external games to use for "ExternalGame" components.
   */
  externalGames: IExternalGame[] = [];

  ngOnInit(): void {
    this.gamesService.getGames().subscribe(
      res => this.games = res,
      err => console.error(err)
    )
    this.gamesService.getExternalGames().subscribe(
      res => this.externalGames = res,
      err => console.error(err)
    )
  }

}
