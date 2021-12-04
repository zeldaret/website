import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from '../games.service';
import { IGame } from '../games.service.interface';

/**
 * Container component for the tabs and relevant content.
 */
@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(private gamesService: GamesService, private router: Router, private route: ActivatedRoute) { }

  /**
   * The summary to use to display basic game info.
   */
  game: IGame;

  ngOnInit(): void {
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
