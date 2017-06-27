import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { TokenService } from './token.service';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(private http: Http, private tokenService: TokenService) {}

  login(username: string, password: string) {
    return this.http.post(environment.baseUrl + '/login', {username, password})
      .map(response => {
        const body: { token: string } = response.json();
        this.tokenService.token = body.token;
        return body;
      })
      .catch(response => {
        const error: { Code?: number, Description?: string } = response.json();
        const message = error.Description || 'Váratlan hiba';
        console.log(message);
        return Observable.throw(response);
      });
  }

}
