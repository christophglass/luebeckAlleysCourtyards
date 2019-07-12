import { ProviderLeafletProvider } from './../../providers/provider-leaflet/provider-leaflet';
import { IPointOfInterest } from './../../providers/providers-gaenge/providers-gaenge';
import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import leaflet from 'leaflet';

/**
 * Generated class for the GaengeModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  templateUrl: 'gaenge-modal.html'
})
export class GaengeModalComponent {

  private _poi: IPointOfInterest = undefined;
  private _map: any;

  constructor(
    public viewCtrl: ViewController,
    private _params: NavParams,
    private _leafletProvider: ProviderLeafletProvider
  ) {
    this._poi = this._params.get('poi');
    if (!this._poi) {
      this.dismiss();
    }
  }

  ionViewDidEnter() {
    this._map = this._leafletProvider.GetDetailMap(this._poi);
    const markerGroup = leaflet.featureGroup();
    const poiMarker: any = leaflet.AwesomeMarkers.icon({ icon: 'fa-dungeon', prefix: 'fa', markerColor: 'blue' });
    const marker: any = leaflet.marker([this._poi.lat, this._poi.lang], { icon: poiMarker });
    marker.bindPopup(this._poi.address).openPopup();
    markerGroup.addLayer(marker);
    this._map.addLayer(markerGroup);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
