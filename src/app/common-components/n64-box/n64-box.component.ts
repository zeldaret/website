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
   * The index to display in the top left.
   */
  @Input() index: number = 1;

  /**
   * The heading on the box.
   */
  @Input() heading: string;

}
