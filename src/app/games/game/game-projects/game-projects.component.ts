import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../games.service';
import { IProject } from '../../games.service.interface';

/**
 * Shows all of the projects for a game.
 */
@Component({
  selector: 'game-projects',
  templateUrl: './game-projects.component.html',
  styleUrls: ['./game-projects.component.scss']
})
export class GameProjectsComponent implements OnInit {

  constructor(private gameService: GamesService) { }

  /**
   * The list of all projects that are known.
   */
  projects: IProject[] = [];

  ngOnInit(): void {
    this.gameService.getProjects().subscribe(
      res => this.projects = res,
      err => console.error(err)
    );
  }

}
