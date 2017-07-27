import { Headers, Http, RequestOptionsArgs } from '@angular/http';
import { TokenService } from './auth/token.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { environment } from '../environments/environment';
import { NotificationService } from './notification.service';

export class BaseHttpService {
  constructor(private http: Http, protected tokenService: TokenService, private notificationService: NotificationService) {}

  send<T>(options: RequestOptionsArgs): Observable<T> {
    if (!options.headers) {
      options.headers = new Headers;
    }
    options.headers.set('Authorization', 'Bearer ' + this.tokenService.token);
    options.url = `${environment.baseUrl}/${options.url}`;
    return this.http.request(options.url, options)
      .map(response => response.json())
      .catch(response => {
        const error: { Code?: number, Description?: string } = response.json();
        const message = error.Description || 'Váratlan hiba';
        this.notificationService.showErrorMessage(message);
        return Observable.throw(response);
      });
  }
}
