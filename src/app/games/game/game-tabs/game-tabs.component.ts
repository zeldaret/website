import { Component, Input, OnInit } from '@angular/core';
import { GamesService } from '../../games.service';

/**
 * Allows user to swap between the GameIntro, GameProjects, and GameResources components.
 */
@Component({
  selector: 'game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.scss']
})
export class GameTabsComponent {

  constructor() { }

  @Input() slug: string;

}
