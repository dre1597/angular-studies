import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';

import { MessageService } from './message.service';
import { THero } from '../types/hero.type';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private readonly http = inject(HttpClient);
  private readonly messageService = inject(MessageService);

  private heroesUrl = 'http://localhost:3000/heroes';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  /** GET heroes from the server */
  public getHeroes(): Observable<THero[]> {
    return this.http.get<THero[]>(this.heroesUrl).pipe(
      tap((_) => this.log('fetched heroes')),
      catchError(this.handleError<THero[]>('getHeroes', [])),
    );
  }

  /* GET heroes whose name contains search term */
  public searchHeroes(term: string): Observable<THero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<THero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap((x) =>
        x.length
          ? this.log(`found heroes matching "${term}"`)
          : this.log(`no heroes matching "${term}"`),
      ),
      catchError(this.handleError<THero[]>('searchHeroes', [])),
    );
  }

  /** GET hero by id. Return `undefined` when id not found */
  public getHeroNo404<Data>(id: number): Observable<THero> {
    const url = `${this.heroesUrl}/?id=${id}`;
    return this.http.get<THero[]>(url).pipe(
      map((heroes) => heroes[0]), // returns a {0|1} element array
      tap((h) => {
        const outcome = h ? 'fetched' : 'did not find';
        this.log(`${outcome} hero id=${id}`);
      }),
      catchError(this.handleError<THero>(`getHero id=${id}`)),
    );
  }

  /** GET hero by id. Will 404 if id not found */
  public getHero(id: number): Observable<THero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<THero>(url).pipe(
      tap((_) => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<THero>(`getHero id=${id}`)),
    );
  }

  /** POST: add a new hero to the server */
  public addHero(hero: THero): Observable<THero> {
    return this.http.post<THero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: THero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<THero>('addHero')),
    );
  }

  /** PUT: update the hero on the server */
  public updateHero(hero: THero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((_) => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero')),
    );
  }

  /** DELETE: delete the hero from the server */
  public deleteHero(id: number): Observable<THero> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<THero>(url, this.httpOptions).pipe(
      tap((_) => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<THero>('deleteHero')),
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
