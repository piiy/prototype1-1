import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { VenueList } from '../pages/venueList/venueList';
import { SelectedVenue } from '../pages/selectedVenue/selectedVenue';
import { VenueInfo } from '../pages/venueInfo/venueInfo';
import { Info2Page } from '../pages/info2/info2';
import { SelectedRoute } from '../pages/selectedRoute/selectedRoute';
import { TravelInfo } from '../pages/travelInfo/travelInfo';
import { ApiProvider } from '../providers/api/api';
import { HttpClientModule } from '@angular/common/http';
import { JwtMaker } from '../providers/Jwt-maker/jwt';
import {JwtBuilder,algorithm} from "jwt-builder";

@NgModule({
  declarations: [
    MyApp,
    VenueList,
    AboutPage,
    SelectedVenue,
    VenueInfo,
    SelectedRoute,
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
    VenueList,
    SelectedRoute,
    SelectedVenue,
    Info2Page,
    VenueInfo,
    TabsPage,
    TravelInfo
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    JwtMaker
  ]
})
export class AppModule {}
