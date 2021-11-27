import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../games.service';

/**
 * Allows user to swap between the GameIntro, GameProjects, and GameResources components.
 */
@Component({
  selector: 'game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.scss']
})
export class GameTabsComponent implements OnInit {

  constructor(private gamesService: GamesService) { }

  /**
   * Determines whether the Intro tab is shown.
   */
  hasIntro: boolean = true;
  /**
   * Determines whether the Projects tab is shown.
   */
  hasProjects: boolean = true;
  /**
   * Determines whether the Resources tab is showing.
   */
  hasResources: boolean = true;

  ngOnInit(): void {
  }

}
