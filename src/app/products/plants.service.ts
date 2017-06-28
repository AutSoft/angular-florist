import { Injectable } from '@angular/core';
import { Http, RequestMethod, RequestOptionsArgs } from '@angular/http';
import { Plant } from './models/plant';
import { TokenService } from '../auth/token.service';
import { BaseHttpService } from '../base-http-service';

@Injectable()
export class PlantsService extends BaseHttpService {

  constructor(http: Http, tokenService: TokenService) {
    super(http, tokenService);
  }

  getPlants(categoryId) {
    const options: RequestOptionsArgs = {};
    options.url = 'plants';
    options.method = RequestMethod.Get;
    options.params = {categoryId};
    return this.send<Plant[]>(options);
  }

  toggleFavoriteStatusOfPlant(plantId: number) {
    const options: RequestOptionsArgs = {};
    options.url = 'plants/favorite/' + plantId;
    options.method = RequestMethod.Post;
    options.body = {};
    return this.send(options);
  }

}