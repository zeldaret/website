import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games/games.service';
import { ISummary } from '../games/games.service.interface';

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
   * The summaries for the supported games. Shows the entries under the "Games" menu.
   */
  summaries: ISummary[];

  ngOnInit(): void {
    this.gamesService.getSummaries().subscribe(
      res => this.summaries = res,
      err => console.error(err)
    )
  }

}
