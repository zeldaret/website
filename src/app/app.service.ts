import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAppService, IStatement } from './app.service.interface';

/**
 * Obtains data relating to the general site.
 */
@Injectable({
  providedIn: 'root'
})
export class AppService implements IAppService {

  constructor(private http: HttpClient) { }

  getStatement(): Observable<IStatement> {
    return this.http.get<IStatement>("/assets/json/statement.json");
  }
}
