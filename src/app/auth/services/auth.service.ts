import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { AuthService } from 'ngx-auth';

import { TokenStorage } from './token.storage.service';

interface AccessData {
  clientToken: string;
  refreshToken: string
}

@Injectable()
export class AuthenticationService implements AuthService {

  constructor(
      private http: HttpClient,
      private tokenStorage: TokenStorage
  ) {}

  /**
     * Check, if user already authorized.
     * @description Should return Observable with true or false values
     * @returns {Observable<boolean>}
     * @memberOf AuthService
     */
    public isAuthorized(): Observable < boolean > {
      return this.tokenStorage
        .getAccessToken()
        .map(token => !!token);
    }

    /**
     * Get access token
     * @description Should return access token in Observable from e.g.
     * localStorage
     * @returns {Observable<string>}
     */
    public getAccessToken(): Observable < string > {
      return this.tokenStorage.getAccessToken();
    }
    // NOT USED, but required by AuthService Interface
    /**
  * Function, that should perform refresh token verifyTokenRequest
  * @description Should be successfully completed so interceptor
  * can execute pending requests or retry original one
  * @returns {Observable<any>}
  */
     public refreshToken(): Observable < AccessData > {
         return
     }
     public refreshShouldHappen(response: HttpErrorResponse): boolean {
         return response.status === 401
     }
     /**
     * Verify that outgoing request is refresh-token,
     * so interceptor won't intercept this request
     * @param {string} url
     * @returns {boolean}
     */
      public verifyTokenRequest(url: string): boolean {
        return url.endsWith('/refresh');
      }

    /**
     * EXTRA AUTH METHODS
     */

    public login(data): Observable<any> {
      return this.http.post(`${environment.API_URL}/tokens`, data)
      .do((tokens: AccessData) => this.saveAccessData(tokens));
    }
    public signup(data): Observable<any> {
      return this.http.post(`${environment.API_URL}/users`, data)
      //.do((tokens: AccessData) => this.login(data))
    }

    /**
     * Logout
     */
    public logout(): void {
      this.tokenStorage.clear();
      location.reload(true);
    }

    /**
     * Save access data in the storage
     *
     * @private
     * @param {AccessData} data
     */
    private saveAccessData({ clientToken }: AccessData) {
      this.tokenStorage
        .setAccessToken(clientToken)
    }

}
