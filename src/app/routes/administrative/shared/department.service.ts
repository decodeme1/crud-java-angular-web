import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

import {Department} from './department.model';

import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private url = 'http://localhost:8081/api/administrative/department';

  constructor(private httpClient: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  public findAll(): Observable<Department[]> {
    return this.httpClient.get<Department[]>(this.url.concat('/find-all'))
      .pipe(
        catchError(this.handlerError)
      );
  }

  handlerError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `${error.status} + ${error.message}`;
    }
    return throwError(errorMessage);
  }

}
