import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, RequestMethod, RequestOptionsArgs } from '@angular/http';
import { TokenService } from './token.service';
import { BaseHttpService } from '../base-http-service';
import { NotificationService } from '../notification.service';

@Injectable()
export class AuthService extends BaseHttpService {

  _isLoggedIn = false;
  _redirectUrl = '';

  constructor(http: Http, tokenService: TokenService, notificationService: NotificationService, private router: Router) {
    super(http, tokenService, notificationService);
  }

  login(username: string, password: string) {
    return this.authenticate(username, password, 'login');
  }

  register(username: string, password: string) {
    return this.authenticate(username, password, 'register');
  }

  private authenticate(username: string, password: string, url: string) {
    const options: RequestOptionsArgs = {};
    options.method = RequestMethod.Post;
    options.url = url;
    options.body = {username, password};
    return this.send<{ token: string }>(options).map(resp => {
      this.tokenService.token = resp.token;
      this._isLoggedIn = true;
      this.router.navigateByUrl(this._redirectUrl);
    });
  }

  get isLoggedIn() {
    return this._isLoggedIn;
  }

  set redirectUrl(url) {
    if (url) {
      this._redirectUrl = url;
    }
  }

}
