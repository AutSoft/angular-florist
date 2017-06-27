import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {
  private _token: string;

  get token() {
    return this._token;
  }

  set token(token: string) {
    this._token = token;
  }

}
