import { Component, Input, OnInit } from '@angular/core';

/**
 * Box used for content. In the style of OoT/MM file select menu.
 */
@Component({
  selector: 'n64-box',
  templateUrl: './n64-box.component.html',
  styleUrls: ['./n64-box.component.scss']
})
export class N64BoxComponent {

  constructor() { }

  /**
   * The number to display in the top left.
   */
  @Input() number: number = 1;

  /**
   * The heading on the box.
   */
  @Input() heading: string;

  /**
   * Determine whether the button is displayed or not.
   */
  @Input() simple: boolean = false;

}
