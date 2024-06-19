import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGame, IGamesService, IResource, IShield } from './games.service.interface';

/**
 * Obtains data relating to the games.
 */
@Injectable({
  providedIn: 'root'
})
export class GamesService implements IGamesService {

  constructor(private http: HttpClient) { }

  getGames(): Observable<IGame[]> {
    return this.http.get<IGame[]>("/assets/json/games.json");
  }

  getResources(): Observable<IResource[]> {
    return this.http.get<IResource[]>("/assets/json/resources.json");
  }

  getGameCSV(filename: string): Observable<string> {
    return this.http.get(`/assets/csv/${filename}.csv`, { responseType: "text" });
  }

  getGameShield(filename: string): Observable<IShield> {
    return this.http.get<IShield>(filename);
  }

  getGameFAQ(filename: string): Observable<string> {
    return this.http.get(`/assets/md/${filename}.md`, { responseType: "text" });
  }
}
