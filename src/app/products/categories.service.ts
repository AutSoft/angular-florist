import { Injectable } from '@angular/core';
import { BaseHttpService } from '../base-http-service';
import { Http, RequestMethod, RequestOptionsArgs } from '@angular/http';
import { TokenService } from '../auth/token.service';
import { Category } from './models/category';

@Injectable()
export class CategoryService extends BaseHttpService {

  constructor(http: Http, tokenService: TokenService) {
    super(http, tokenService);
  }

  getCategories() {
    const options: RequestOptionsArgs = {};
    options.url = 'categories';
    options.method = RequestMethod.Get;
    return this.send<Category[]>(options);
  }

}
