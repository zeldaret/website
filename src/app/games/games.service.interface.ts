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
   * The URL for the card title to link to.
   */
  routingURL: string;
  /**
   * The URL of the shield json to read.
   */
  shieldURL: string;
  /**
   * The name of the "FAQ" MD to read.
   */
  faq: string;
  /**
   * Links to display as an icon. The key defines the icon, and the value is the link href.
   */
  links: {[type: string]: string};
  /**
   * Struct with names of CSVs to use
   */
  csvs: ICSVs;
  /**
   * Data from CSVs
   */
  csvData: string[];
  /**
   * The charts and data for each game.
   */
  progressMeta: IChart[];
  /**
   * Whether the game is external.
   */
  external: boolean;
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
  index: number;
  /**
   * Names to use for the lines
   */
  series: ISeries[];
  /**
   * The series to have for each chart.
   */
  subdivisions: ISubdivision[];
}

/**
 * Describes a csv of chart data and its name.
 */
export interface ICSVs {
  /**
   * CSV file to get the matching data from.
   */
  matching: string;
  /**
   * CSV file to get the nonmatching data from.
   */
  nonmatching: string;
}

/**
 * Describes the series to plot and visibility.
 */
export interface ISeries {
  /**
   * Name to show.
   */
  name: string;
  /**
   * Whether to display the series by default.
   */
  visibility: boolean;
}

/**
 * Describes a singles series within a chart.
 */
export interface ISubdivision {
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
 * Describes a game's shield output.
 */
export interface IShield {
  /**
   * Static label in left half.
   */
  label: string;
  /**
   * Generally the progress number.
   */
  message: string;
  /**
   * Colour of the message background.
   */
  color: string;
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

  /**
   * Get the Shield data for a game.
   *
   * @param filename The filename of the desired CSV.
   */
  getGameShield(filename: string): Observable<IShield>;

  /**
   * Get the FAQ data for a game.
   *
   * @param filename The filename of the markdown file to read.
   */
  getGameFAQ(filename: string): Observable<string>;
}
