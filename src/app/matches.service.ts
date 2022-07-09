import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IMatch } from 'src/app/models/match.model';

const URL_PREFIX = 'http://localhost:3000';
@Injectable({
  providedIn: 'root',
})
export class MatchesService {
  constructor(private http: HttpClient) {}

  getMatches(): Observable<Array<IMatch>> {
    return this.http.get<Array<IMatch>>(`${URL_PREFIX}/matches`);
  }

  addMatch(match: IMatch) {
    return this.http.post(`${URL_PREFIX}/matches`, match).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error.message);
        return throwError('Error while creating a match' + error.message);
      })
    );
  }

  updateMatch(match: IMatch, id: string): Observable<IMatch> {
    return this.http.put<IMatch>(`${URL_PREFIX}/matches/${id}`, match).pipe(
      catchError((error: HttpErrorResponse) => {
        // this.errorHandler.log("Error while updating a match", error);
        console.log(error.message);
        return throwError('Error while updating a match ' + error.message);
      })
    );
  }

  deleteMatch(id: string) {
    return this.http.delete(`${URL_PREFIX}/matches/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error.message);
        return throwError('Error while deleting a match ' + error.message);
      })
    );
  }
}
