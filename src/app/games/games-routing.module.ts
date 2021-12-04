import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { GameComponent } from './game/game.component';

const gameRoutes: Routes = [
  {
    path: "games/:slug",
    component: GameComponent,
  },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(gameRoutes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
