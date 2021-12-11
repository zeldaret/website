import { KeyValue } from '@angular/common';
import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { GamesService } from 'src/app/games/games.service';
import { IGame } from 'src/app/games/games.service.interface';


/**
 * Box with project FAQ 
 */
@Component({
  selector: 'game-faq',
  templateUrl: './game-faq.component.html',
  styleUrls: ['./game-faq.component.scss']
})
export class GameFAQComponent {
  
  constructor(private gamesService: GamesService) { }

  /**
   * Game object which holds the markdown filename.
   */
  @Input() game: IGame = null;
}
