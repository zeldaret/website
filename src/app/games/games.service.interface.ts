import { Observable } from "rxjs";

/**
 * Basic game info to display on the front page.
 */
export interface ISummary {
  /**
   * The string to use to identify the game.
   */
  slug: string;
  /**
   * The game's full title.
   */
  title: string;
  /**
   * An introduction string.
   */
  intro: string;
  /**
   * A percentage for general decompilation progress.
   * TODO Calculate this on the fly, as opposed to a static number.
   */
  progress: number;
  /**
   * Links to display as an icon. The key defines the icon, and the value is the link href.
   */
  links: {[type: string]: string};
}

/**
 * Resources to display within the Resources tab.
 */
export interface IResource {
  /**
   * The slugs/games that this resource will appear under.
   */
  slugs: string[];
  /**
   * The header that this resource is grouped under.
   */
  header: string;
  /**
   * The subheader that this resource is grouped under.
   */
  subheader?: string;
  /**
   * The text to display on the webpage.
   */
  text: string;
  /**
   * The link to direct the user to.
   */
  link: string;
  /**
   * A description to display on mouseover.
   */
  tooltip?: string;
}

/**
 * Functions to implement within "GamesService".
 */
export interface IGamesService {

  /**
   * Get the summaries for all supported games.
   */
  getSummaries(): Observable<ISummary[]>;

  /**
   * Get all of the resources.
   */
  getResources(): Observable<IResource[]>;

}
