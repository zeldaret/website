import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { GameInformationComponent } from './game/game-information/game-information.component';
import { GameResourcesComponent } from './game/game-resources/game-resources.component';
import { GameComponent } from './game/game.component';

const gameRoutes: Routes = [
  {
    path: "games/:slug",
    component: GameComponent,
    children: [
      {
        path: "",
        component: GameInformationComponent,
        outlet: "game"
      },
      {
        path: "info",
        redirectTo: ""
      }
    ]
  },
  {
    path: "games/:slug/resources",
    component: GameComponent,
    children: [
      {
        path: "",
        component: GameResourcesComponent,
        outlet: "game"
      }
    ]
  }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(gameRoutes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
