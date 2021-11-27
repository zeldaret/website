import { Component, OnInit } from '@angular/core';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

/**
 * Application footer.
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor() { }

  /**
   * Icon definition.
   */
  discord = faDiscord;

}
