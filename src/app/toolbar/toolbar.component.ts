import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games/games.service';
import { IGame } from '../games/games.service.interface';

/**
 * Application header.
 */
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private gamesService: GamesService) { }

  /**
   * The information for the supported games. Shows the entries under the "Games" menu.
   */
  games: IGame[];

  ngOnInit(): void {
    this.gamesService.getGames().subscribe(
      res => this.games = res,
      err => console.error(err)
    )
  }

}
