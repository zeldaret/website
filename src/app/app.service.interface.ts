import { Observable } from "rxjs";

/**
 * Statement data.
 */
export interface IStatement {
  /**
   * The statement title.
   */
  title: string;
  /**
   * The statement to display.
   */
  content: string;
}

export interface IAppService {
  /**
   * Try and get a statement that is available for display.
   */
  getStatement(): Observable<IStatement>;
}
