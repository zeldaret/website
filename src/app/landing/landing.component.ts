import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { IStatement } from '../app.service.interface';

/**
 * Component shown on the front page (when people go to "/").
 */
@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private appService: AppService) { }

  /**
   * The potential statement that is meant to be shown.
   */
  statement: IStatement = null;

  ngOnInit() {
    this.appService.getStatement().subscribe(
      res => this.statement = res
    );
  }

}
