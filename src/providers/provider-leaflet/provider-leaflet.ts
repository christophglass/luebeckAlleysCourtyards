import { IPointOfInterest } from './../providers-gaenge/providers-gaenge';
import { Injectable } from '@angular/core';
import leaflet from 'leaflet';

/*
  Generated class for the ProviderLeafletProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const tileLayer: string = 'http://tile.stamen.com/toner/{z}/{x}/{y}.png';
const attributions: string = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.';
const maxZoom: number = 18;
const minZoom: number = 15;
const centerLat: number = 53.867021;
const centerLang: number = 10.687372;
const bounds = leaflet.latLng(centerLat, centerLang).toBounds(2500);

@Injectable()
export class ProviderLeafletProvider {

  constructor() { }

  public GetInitialMap(): any {
    const map = this._getMap('map');
    map.setView([centerLat, centerLang], minZoom);
    return map;
  }

  public GetDetailMap(poi: IPointOfInterest): any {
    const map = this._getMap('detailmap');
    map.setView([poi.lat, poi.lang], maxZoom);
    return map;
  }

  private _getMap(mapId: string): any {
    const map = leaflet.map(mapId).fitWorld();
    leaflet.tileLayer(tileLayer, {
      attribution: attributions,
      maxZoom: maxZoom,
      minZoom: minZoom,
    }).addTo(map);
    map.setMaxBounds(bounds);
    map.on('resize', () => { map.fitWorld(); });
    return map;
  }
}

