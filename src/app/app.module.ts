import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { VenuePage } from '../pages/venue/venue';
import { GlobenPage } from '../pages/globen/globen';
import { MapGlobenT } from '../pages/mapGlobenT/mapGlobenT';
import { VenueInfo } from '../pages/venueInfo/venueInfo';
import { Info2Page } from '../pages/info2/info2';
import { MapBlasut } from '../pages/mapBlasut/mapBlasut';
import { MapGullmarsplan } from '../pages/mapGullmarsplan/mapGullmarsplan';
import { MapSkarmarbrink } from '../pages/mapSkarmarbrink/mapSkarmarbrink';
import { TravelInfo } from '../pages/travelInfo/travelInfo';
import { ApiProvider } from '../providers/api/api';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    VenuePage,
    AboutPage,
    HomePage,
    MapGlobenT,
    GlobenPage,
    VenueInfo,
    MapBlasut,
    MapSkarmarbrink,
    MapGullmarsplan,
    Info2Page,
    TabsPage,
    TravelInfo
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    VenuePage,
    GlobenPage,
    MapGlobenT,
    MapBlasut,
    MapGullmarsplan,
    MapSkarmarbrink,
    Info2Page,
    VenueInfo,
    HomePage,
    TabsPage,
    TravelInfo
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider
  ]
})
export class AppModule {}
