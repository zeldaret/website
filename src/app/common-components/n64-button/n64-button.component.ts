import { Component, Input, OnInit } from '@angular/core';

/**
 * Button in the style of OoT/MM file select.
 */
@Component({
  selector: 'n64-button',
  templateUrl: './n64-button.component.html',
  styleUrls: ['./n64-button.component.scss']
})
export class N64ButtonComponent {

  constructor() { }

  /**
   * The location to take the user on click.
   */
  @Input() routerLink: string | any[];

}
