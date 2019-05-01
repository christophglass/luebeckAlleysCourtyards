import { ComponentsModule } from './../components/components.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { GaengePage } from '../pages/gaenge/gaenge';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GaengeProvider } from '../providers/providers-gaenge/providers-gaenge';
import { ProviderLeafletProvider } from '../providers/provider-leaflet/provider-leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    GaengePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    GaengePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    GaengeProvider,
    ProviderLeafletProvider,
    Geolocation
  ]
})
export class AppModule { }
