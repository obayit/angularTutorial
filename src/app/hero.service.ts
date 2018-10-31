import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Typ': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = "api/heroes";

  constructor(
      private messageService: MessageService,
      private http: HttpClient
    ) { }

  getHeroes(): Observable<Hero[]> {
    return  this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(_ => this.log('fetched Heroes')),
      catchError(this.handleError('getHeroes', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getHero(id: number): Observable<Hero> {
    return  this.http.get<Hero>(`${this.heroesUrl}/${id}`).pipe(
      tap(hero => this.log(`fetched Hero id = ${hero.id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  save(hero: Hero): Observable<any>{
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`update hero id = ${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  add(hero: Hero): Observable<any>{
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
      tap(hero => this.log(`Added hero w/ id = ${hero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  delete(hero: Hero | number): Observable<any>{
    const id = typeof hero === 'number' ? hero : hero.id;
    return this.http.delete<Hero>(`${this.heroesUrl}/${id}`, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id = ${id}`)),
      catchError(this.handleError<any>('deleteHero'))
    );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
