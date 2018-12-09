import { IPointOfInterest } from './../providers-gaenge/providers-gaenge';
import { Injectable } from '@angular/core';
import leaflet from 'leaflet';

/*
  Generated class for the ProviderLeafletProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const tileLayer: string = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attributions: string = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>';
const maxZoom: number = 18;
const minZoom: number = 14;
const centerLat: number = 53.8654673;
const centerLang: number = 10.6865593;
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
    const map = leaflet.map(mapId).fitWorld().zoomIn();
    leaflet.tileLayer(tileLayer, {
      attributions: attributions,
      maxZoom: maxZoom,
      minZoom: minZoom,
    }).addTo(map);
    map.setMaxBounds(bounds);
    map.on('resize', () => { map.fitWorld(); });
    return map;
  }
}
