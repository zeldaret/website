import { Component, Host, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from '../../games.service';
import { IGame } from '../../games.service.interface';

/**
 * Shows an introduction to the game as well as a progress chart.
 */
@Component({
  selector: 'game-information',
  templateUrl: './game-information.component.html',
  styleUrls: ['./game-information.component.scss']
})
export class GameInformationComponent implements OnInit {

  constructor(private gamesService: GamesService, private router: Router, private route: ActivatedRoute) {}

  /**
   * The game to display the intro/progress chart for.
   */
  game: IGame;

  ngOnInit() {
    this.route.params.subscribe(
      res => {
        const slug: string = res.slug;
        this.gamesService.getGames().subscribe(
          res => {
            // redirect if an unknown slug is provided
            const index = res.findIndex((game) => game.slug === slug)
            if (index !== -1) {
              this.game = res[index];
            }
            else {
              this.router.navigateByUrl("/404", { skipLocationChange: true });
            }
          },
          err => {
            console.error(err);
            this.router.navigateByUrl("/404", { skipLocationChange: true });
          }
        );
      }
    );
  }

}
