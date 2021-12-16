import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IStatement } from '../app.service.interface';
import { DialogComponent } from '../common-components/dialog/dialog.component';

/**
 * Box that allows a user to show a statement, should one be available.
 */
@Component({
  selector: 'statement-notification',
  templateUrl: './statement-notification.component.html',
  styleUrls: ['./statement-notification.component.scss']
})
export class StatementNotificationComponent {

  /**
   * Statement data, if any.
   */
  @Input() statement: IStatement = null;

  constructor(private dialog: MatDialog) { }

  /**
   * Show the statement in a dialog on button click.
   */
  showStatement() {
    this.dialog.open(DialogComponent, {
      data: this.statement,
      width: "600px"
    });
  }

}
