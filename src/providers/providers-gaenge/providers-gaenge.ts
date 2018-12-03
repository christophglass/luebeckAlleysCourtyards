import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProvidersGaengeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GaengeProvider {

  constructor(public http: HttpClient) { }

  public GetGaenge() {
    const url = 'assets/providers-gaenge.json';
    return new Promise(resolve => {
      this.http.get(url).subscribe(data => {
        resolve(data);
      }, err => {
        console.log('hier', err);
      });
    });
  }
}
