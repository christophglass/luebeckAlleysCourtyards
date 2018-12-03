import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public gaengeProvider: GaengeProvider) { }

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
    this._map = leaflet.map("map").fitWorld();
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
    }).addTo(this._map);
    this._map.setView([53.867698, 10.685933], 14);
    this._gaengeData.forEach((poi: IPointOfInterest) => {

      let markerGroup = leaflet.featureGroup();
      let marker: any = leaflet.marker([poi.lat, poi.lang]).on('click', () => {
        alert('Marker clicked');
      });
      markerGroup.addLayer(marker);
      this._map.addLayer(markerGroup);
    });
  }
}
