import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {catchError, delay, map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';


export interface Employees {
  employerId: number;
  name: string;
  surname: string;
  degree: string;


}

@Injectable()
export class EmplsService {

  constructor(
    private http: HttpClient) {
  }

  getEmployess() {
    const heads = new HttpHeaders({
      'Content-Type': 'applilaction/json; charset-utf8'
    });
    return this.http.get('http://localhost:8087/api/employers/all', {
      headers: heads
    }).pipe(
      // delay(500), // zaderjka na 3 second
      map((res: HttpResponse<Employees[]>) => {
        return res[`_embedded`][`employees`];
      }),
      catchError(err => {
        return throwError('Server Failed:  ');
      })
    );
  }

  getEmployee(id) {
    const heads = new HttpHeaders({
      'Content-Type': 'applilaction/json; charset-utf8'
    });
    return this.http.get(`http://localhost:8087/api/employers/${id}`, {
      headers: heads
    }).pipe(
      map((res: HttpResponse<Employees>) => {
        console.log(res);
        return res;
      }),
      catchError(err => {
        return throwError('Server Failed:  ');
      })
    );
  }
}
