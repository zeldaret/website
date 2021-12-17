import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { GamesService } from '../games.service';
import { IChart, IGame } from '../games.service.interface';

/**
 * Container component for relevant content on a game.
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
  /**
   * Data obtained from the CSV files.
   */
  csvData: string[];

  // Get the CSVs if the navigated slug is correct, otherwise navigate to 404
  ngOnInit(): void {
    this.route.params.subscribe(
      res => {
        const slug: string = res.slug;
        this.gamesService.getGames().subscribe(
          res => {
            // redirect if an unknown slug is provided
            const index = res.findIndex((game) => game.slug === slug);
            if (index === -1) {
              this.router.navigateByUrl("/404", { skipLocationChange: true });
            }
            else {
              this.game = res[index];
              forkJoin([
                this.gamesService.getGameCSV(this.game.csvs.nonmatching),
                this.gamesService.getGameCSV(this.game.csvs.matching)
              ]).subscribe(
                res => this.csvData = res,
                err => console.error(err)
              );
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