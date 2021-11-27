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
 * Contains information about a decomp project and how to process the associated CSV data.
 */
export interface IProject {
  /**
   * The games that this project relates to.
   */
  slugs: string[];
  /**
   * The project name.
   */
  name: string;
  /**
   * The name of the CSV file for matched project data.
   */
  matched: string;
  /**
   * The name of the CSV file for unmatched project data.
   */
  unmatched: string;
  /**
   * Column definitions for CSV parsing.
   */
  columns: ICSVColumnDef[];
}

/**
 * Describes one or more columns and how to process their values.
 */
export interface ICSVColumnDef {
  /**
   * The type of column.
   */
  type: string,
  /**
   * The indexes that this definition refers to.
   */
  index: number | number[];
  /**
   * The name of the data that this refers to.
   */
  name: string;
  /**
   * A verbose display string.
   */
  display: string
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

  /**
   * Get all of the projects.
   */
  getProjects(): Observable<IProject[]>;

  /**
   * Get the CSV data for a project.
   *
   * @param filename The filename of the desired CSV.
   */
  getProjectCSV(filename: string): Observable<string>;
}
