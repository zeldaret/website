import { Observable } from "rxjs";

/**
 * Game information to display and for project progress processing.
 */
export interface IGame {
  /**
   * The string to use to identify the game.
   */
  slug: string;
  /**
   * The game's full title.
   */
  title: string;
  /**
   * Links to display as an icon. The key defines the icon, and the value is the link href.
   */
  links: {[type: string]: string};
  /**
   * The name of the CSV to read.
   */
  progress: string;
  /**
   * The charts to display for this game.
   */
  charts: IChart[];
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
 * Describes a chart to display based on game CSV data.
 */
export interface IChart {
  /**
   * The chart title.
   */
  title: string;
  /**
   * The chart subtitle.
   */
  subtitle: string;
  /**
   * The index to start counting pairs from. If none provided, will assume 5.
   */
  index?: number;
  /**
   * The series to have for each chart.
   */
  series: ISeries[];
}

/**
 * Describes a singles series within a chart.
 */
export interface ISeries {
  /**
   * The name of the metric to display at the top.
   */
  metric: string;
  /**
   * The description to show in the tooltip.
   * TODO do we want this?
   */
  description: string;
}

/**
 * Functions to implement within "GamesService".
 */
export interface IGamesService {

  /**
   * Get the information for all supported games.
   */
  getGames(): Observable<IGame[]>;

  /**
   * Get all of the resources.
   */
  getResources(): Observable<IResource[]>;

  /**
   * Get the CSV data for a game.
   *
   * @param filename The filename of the desired CSV.
   */
  getGameCSV(filename: string): Observable<string>;
}
