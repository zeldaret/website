import { Component, Input, OnInit } from '@angular/core';
import { ISummary } from '../../games.service.interface';
import { faGithub, faTrello } from '@fortawesome/free-brands-svg-icons';

/**
 * Displays a game's name, decomp progress, and links.
 */
@Component({
  selector: 'game-summary',
  templateUrl: './game-summary.component.html',
  styleUrls: ['./game-summary.component.scss']
})
export class GameSummaryComponent implements OnInit {

  constructor() { }

  /**
   * The summary to use.
   */
  @Input() data: ISummary;

  /**
   * Icon definition.
   */
  github = faGithub;
  /**
   * Icon definition.
   */
  trello = faTrello;

  ngOnInit(): void {
  }

}
