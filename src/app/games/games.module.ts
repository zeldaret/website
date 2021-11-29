import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../common-components/common-components.module';
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
import { GameResourcesComponent } from './game/game-resources/game-resources.component';
import { GamesRoutingModule } from './games-routing.module';
import { GameInformationComponent } from './game/game-information/game-information.component';
import { GameProgressComponent } from './game/game-information/game-progress/game-progress.component';

/**
 * Module for holding game related components and services.
 */
@NgModule({
  declarations: [
    GameSummariesComponent,
    GameSummaryComponent,
    GameComponent,
    GameTabsComponent,
    GameResourcesComponent,
    GameInformationComponent,
    GameProgressComponent
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
