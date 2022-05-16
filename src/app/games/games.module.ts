import { NgModule, SecurityContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { GamesService } from './games.service';
import { GameSummariesComponent } from './game-summaries/game-summaries.component';
import { GameSummaryComponent } from './game-summaries/game-summary/game-summary.component';
import { GameComponent } from './game/game.component';
import { ExternalGameSummaryComponent } from './game-summaries/external-game-summary/external-game-summary.component'
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
import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown';



// function that returns `MarkedOptions` with renderer override
export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();

  renderer.heading = (text: string, level: 1 | 2 | 3 | 4 | 5 | 6) => {
    const id = text.toLowerCase().replace(/(?:[\.'"?]|&#??\w+;)+/g, '').replace(/[^\w]+/g, '-');
    return `<h${level} id="${id}">${text}</h${level}>`;
  };
  renderer.link = (href: string, title: string, text: string) => {
    const hrefString = (href.startsWith("#") ? `href="${window.location.pathname}${href.replace(/\./,'')}"` : `href="${href}"`);
    const titleString = ((!title || title.length === 0) ? "" : `title="${title}"`);

    return `<a ${hrefString} ${titleString}>${text}</a>`;
  }

  return {
    renderer: renderer
  };
}


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
    GameFAQComponent,
    ExternalGameSummaryComponent
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
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE,
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptionsFactory
      }
    }),
  ],
  exports: [
    GameSummariesComponent
  ],
  providers: [GamesService]
})
export class GamesModule {
}