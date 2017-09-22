import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenStorage {

  /**
   * Get access token
   * @returns {Observable<string>}
   */
  public getAccessToken(): Observable<string> {
    const token: string = <string>localStorage.getItem('clientToken');
    return Observable.of(token);
  }


  /**
   * Set access token
   * @returns {TokenStorage}
   */
  public setAccessToken(token: string): TokenStorage {
    localStorage.setItem('clientToken', token);

    return this;
  }

   /**
   * Remove tokens
   */
  public clear() {
    localStorage.removeItem('clientToken');
  }
}
