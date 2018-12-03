import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProvidersGaengeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GaengeProvider {

  constructor(public http: HttpClient) { }

  public GetGaenge(): Observable<IPointOfInterest[]> {
    const url = 'assets/providers-gaenge.json';
    return this.http.get(url)
      .map(res => {
        return res as IPointOfInterest[];
      });
  }
}

export interface IPointOfInterest {
  name: string,
  address: string,
  lat: string,
  lang: string,
  accessibility: string,
  comment: string,
  image: string
}
