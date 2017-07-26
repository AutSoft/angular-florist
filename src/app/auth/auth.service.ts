import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { TokenService } from './token.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthService {

  constructor(private http: Http, private tokenService: TokenService) {}

  login(username: string, password: string) {
    return Observable.of(null);
  }

  register(username: string, password: string) {
    return Observable.of(null);
  }

}
