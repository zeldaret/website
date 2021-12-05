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
import { GamesRoutingModule } from './games-routing.module';
import { GameProgressComponent } from './game/game-progress/game-progress.component';
import { GameChartComponent } from './game/game-progress/game-chart/game-chart.component';
import { ChartModule } from 'angular-highcharts';
import { GameFAQComponent } from './game/game-faq/game-faq.component';
import { MarkdownModule } from 'ngx-markdown';

/**
 * Module for holding game related components and services.
 */
@NgModule({
  declarations: [
    GameSummariesComponent,
    GameSummaryComponent,
    GameComponent,
    GameProgressComponent,
    GameChartComponent,
    GameFAQComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    CommonComponentsModule,
    ChartModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    FontAwesomeModule,
    FlexLayoutModule,
    MarkdownModule.forRoot(),
  ],
  exports: [
    GameSummariesComponent
  ],
  providers: [GamesService]
})
export class GamesModule {
 }
