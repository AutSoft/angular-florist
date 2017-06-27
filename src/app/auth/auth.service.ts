import { Injectable } from '@angular/core';
import { Http, RequestMethod, RequestOptionsArgs } from '@angular/http';
import { TokenService } from './token.service';
import { BaseHttpService } from '../base-http-service';

@Injectable()
export class AuthService extends BaseHttpService {

  constructor(http: Http, tokenService: TokenService) {
    super(http, tokenService);
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
    });
  }

}
