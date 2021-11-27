import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGamesService, IResource, ISummary } from './games.service.interface';

/**
 * Obtains data for games.
 */
@Injectable({
  providedIn: 'root'
})
export class GamesService implements IGamesService {

  constructor(private http: HttpClient) { }

  getSummaries(): Observable<ISummary[]> {
    return this.http.get<ISummary[]>("/assets/json/summaries.json");
  }

  getResources(): Observable<IResource[]> {
    return this.http.get<IResource[]>("/assets/json/resources.json");
  }

  getProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>("/assets/json/projects.json");
  }

  getProjectCSV(filename: string): Observable<string> {
    return this.http.get<string>(`/assets/csv/${filename}.csv`);
  }
}
