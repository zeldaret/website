import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { environment } from 'src/environments/environment';
import { GamesService } from './games.service';
import { GameSummariesComponent } from './game-summaries/game-summaries.component';
import { GameSummaryComponent } from './game-summaries/game-summary/game-summary.component';
import { GameComponent } from './game/game.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GameTabsComponent } from './game/game-tabs/game-tabs.component';
import { GameIntroComponent } from './game/game-intro/game-intro.component';
import { GameProjectsComponent } from './game/game-projects/game-projects.component';
import { GameResourcesComponent } from './game/game-resources/game-resources.component';
import { GamesRoutingModule } from './games-routing.module';
import { GameProjectComponent } from './game/game-projects/game-project/game-project.component';

/**
 * Module for holding game related components and services.
 */
@NgModule({
  declarations: [
    GameSummariesComponent,
    GameSummaryComponent,
    GameComponent,
    GameTabsComponent,
    GameIntroComponent,
    GameProjectsComponent,
    GameResourcesComponent,
    GameProjectComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    CommonComponentsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    FontAwesomeModule,
    FlexLayoutModule
  ],
  exports: [
    GameSummariesComponent
  ],
  providers: [GamesService]
})
export class GamesModule { }
