import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

/**
 * Page used to handle 404 errors.
 */
@Component({
  selector: 'page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {

  constructor(private route: Router, public dialog: MatDialog) { }
  ngOnInit(): void {
  }

  // Continue Game will just redirect the user home
  continueGame() {
    this.route.navigate(['']);
  }

  quitGame(): void {
    let dialogRef = this.dialog.open(GameoverDialog, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Gameover, they died');
      // Return the user home anyways
      this.route.navigate(['']);
    });
  }
}

@Component({
  selector: 'gameover-dialog',
  templateUrl: 'gameover.html',
})
export class GameoverDialog {
  constructor(
    public dialogRef: MatDialogRef<GameoverDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
