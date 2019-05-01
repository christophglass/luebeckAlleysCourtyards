import { ProviderLeafletProvider } from './../../providers/provider-leaflet/provider-leaflet';
import { GaengeModalComponent } from './../../components/gaenge-modal/gaenge-modal';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { GaengeProvider, IPointOfInterest } from './../../providers/providers-gaenge/providers-gaenge';
import leaflet from 'leaflet';

/**
 * Generated class for the GaengePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-gaenge',
  templateUrl: 'gaenge.html',
})
export class GaengePage {

  private _gaengeData: Array<IPointOfInterest> = new Array<IPointOfInterest>();

  @ViewChild('map') mapContainer: ElementRef;
  private _map: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public gaengeProvider: GaengeProvider,
    public leafletProvider: ProviderLeafletProvider,
    public modalCtrl: ModalController) { }

  ionViewDidEnter() {
    this.gaengeProvider.GetGaenge().subscribe(
      data => {
        this._gaengeData = data;
        this._loadMap();
      },
      error => { console.error(error); }
    );
  }

  private _loadMap() {
    this._map = this.leafletProvider.GetInitialMap();
    const icon = leaflet.divIcon({

      html: '<i class="fa fa-map-marker-alt" style="color: blue"></i>',
      iconSize: null,
      className: 'marker'

    });
    this._gaengeData.forEach((poi: IPointOfInterest) => {
      let markerGroup = leaflet.featureGroup();
      let marker: any = leaflet.marker([poi.lat, poi.lang]).on('click', () => {
        this._presentGangModal(poi);
      });
      markerGroup.addLayer(marker);
      this._map.addLayer(markerGroup);
    });
  }

  private _presentGangModal(poi: IPointOfInterest) {
    this.modalCtrl.create(GaengeModalComponent, { poi: poi }).present();
  }
}
