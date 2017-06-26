import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { ResponseOptions } from '@angular/http';

export class InMemoryPlantsDbService implements InMemoryDbService {

  createDb() {
    const login = [];
    const register = [];

    return {login, register};
  }

  responseInterceptor(responseOptions: ResponseOptions, requestInfo: RequestInfo) {
    if (requestInfo.resourceUrl.includes('login') || requestInfo.resourceUrl.includes('register')) {
      responseOptions.body = {token: 'token'};
      responseOptions.status = 200;
    } else if (typeof responseOptions.body === 'object') {
      responseOptions.body = responseOptions.body ? (responseOptions.body as any).data : null;
    }

    return responseOptions;
  }

}
