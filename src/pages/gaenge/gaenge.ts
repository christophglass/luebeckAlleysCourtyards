import { Component, AfterViewInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GaengeProvider } from './../../providers/providers-gaenge/providers-gaenge';

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
export class GaengePage implements AfterViewInit {

  constructor(public navCtrl: NavController, public navParams: NavParams, public gaengeProvider: GaengeProvider) {

  }

  ngAfterViewInit() {
    this.gaengeProvider.GetGaenge().then(data => {
      console.log(data);
    })
  }
}
