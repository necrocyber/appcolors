import { Injectable } from '@angular/core';
import { Colors } from '../interfaces/colors';
import { Observable, throwError  } from  'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  URL_COLORS = 'https://reqres.in/api/colors?page='

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  constructor(private http: HttpClient) { }

  getColors(n): Observable<Colors> {
    return this.http.get<Colors>(`${this.URL_COLORS+n}`).pipe(retry(3), catchError(this.handleError))
  }

}
