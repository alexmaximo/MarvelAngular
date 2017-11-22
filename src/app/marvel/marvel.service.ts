import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MarvelService {
  constructor(private jsonp: Jsonp) {}

  getAll (): Promise<JSON[]> {
    return this.jsonp.get('https://gateway.marvel.com:443/v1/public/characters?apikey=c2602cfbc8c21064f1ee68c2db1ebe75')
                      .toPromise()
                      .then(response => response.json() as JSON[])
                      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
