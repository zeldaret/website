import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { ISummary } from '../games.service.interface';

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
   * List of summaries to use for "GameSummary" components.
   */
  summaries: ISummary[] = [];

  ngOnInit(): void {
    this.gamesService.getSummaries().subscribe(
      res => this.summaries = res,
      err => console.error(err)
    )
  }

}
