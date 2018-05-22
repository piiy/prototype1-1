import { Component } from '@angular/core';
import { NavController, ViewController, PopoverController, NavParams } from 'ionic-angular';
import { TravelInfo } from '../travelInfo/travelInfo';
import { ApiProvider } from '../../providers/api/api';
import { SelectedRoute } from '../selectedRoute/selectedRoute';
import { InAppBrowser, InAppBrowserOptions, InAppBrowserObject } from '@ionic-native/in-app-browser';


@Component({
  selector: 'page-selectedVenue',
  templateUrl: 'selectedVenue.html'
})
export class SelectedVenue {
  stations;
  public venueName;
  public venueId;

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public provider: ApiProvider, public navParams: NavParams, public inAppBrowser: InAppBrowser) {
  this.venueName = navParams.get("venueName");
  this.venueId = navParams.get("venueId");
  this.ionLoadStations(this.venueId);
  }

  openEventPage() {

    // Byt ut till db_event/event_url
    const url = 'https://www.stockholmlive.com/evenemang/alla-evenemang';

    const options: InAppBrowserOptions = {
      toolbar: 'yes',
      footer: 'yes',
    }
    
    const browser = this.inAppBrowser.create(url, '_system', options);

  }

  openRestaurantPage() {

    const url = 'https://www.google.com/maps/search/' + this.venueName + '+Restaurants+Bars'

    const options: InAppBrowserOptions = {
      toolbar: 'yes',
      footer: 'yes',
    }
    
    const browser = this.inAppBrowser.create(url, '_system', options);

  }

  openOverviewPage() {

    // Byt ut till db_venue_arenaview_url
    const url = 'https://res.cloudinary.com/pvt-group09/image/upload/v1526918964/Globen_arena_view.png';

    const options: InAppBrowserOptions = {
      toolbar: 'yes',
      footer: 'yes',
    }
    
    const browser = this.inAppBrowser.create(url, '_system', options);

  }

 goToselectedRoute(routeName:string, siteId:string, tType, icon){
    this.navCtrl.push(SelectedRoute, {
      routeName: routeName,
      siteId: siteId,
      venueId: this.venueId,
      transport_type: tType,
      venueName: this.venueName,
      icon: icon,
    });
  }

  openInfo(myEvent) {   // Skapar en PopOver-sida när man trycker på "i"
    let popover = this.popoverCtrl.create(TravelInfo);
    popover.present({
      ev: myEvent
    });
  }

  ionLoadStations(venue:string) { // Kommer att hämta olika stationer från API
    this.provider.getStations(venue)
    .subscribe(
      (data)=> {
        this.stations=data["results"];
      },
      (error)=> {console.log("error: ", JSON.stringify(error));}
    )
  }
}
interface MyObj {
  name: string

}
