import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProxyService {

  private actionUrl: string;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient
  ) {
    this.actionUrl = environment.apiUrl;
  }

  /**
   * HTTP GET Petition to API
   *
   * @param endpoint Route endpoint to query
   */
  public get<T>(endpoint: string = null): Promise<T> {
    return new Promise<T>(async (resolve, reject) => {
      let actionUrl = this.actionUrl;
      if (endpoint !== null) {
        actionUrl += endpoint;
      }

      this.http.get<T>(actionUrl, this.httpOptions).pipe(
        retry(1)
      ).subscribe(
        (response) => {
          resolve(response);
        }, (error) => {
          resolve(error.error !== undefined ? error.error : error);
        }
      );
    });
  }
}
