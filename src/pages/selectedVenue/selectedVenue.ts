import { Component } from '@angular/core';
import { NavController, ViewController, PopoverController } from 'ionic-angular';
import { Info2Page } from '../info2/info2';
import { TravelInfo } from '../travelInfo/travelInfo';
import { ApiProvider } from '../../providers/api/api';
import { SelectedRoute } from '../selectedRoute/selectedRoute';


@Component({
  selector: 'page-selectedVenue',
  templateUrl: 'selectedVenue.html'
})
export class SelectedVenue {
  stations;
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public provider: ApiProvider) {
  this.ionLoadVenues();

  }

  goToselectedRoute(params){
    this.navCtrl.push(SelectedRoute);
  }

  openInfo(myEvent) {   // Skapar en PopOver-sida när man trycker på "i"
    let popover = this.popoverCtrl.create(TravelInfo);
    popover.present({
      ev: myEvent  // Skickar med klick-eventet så att rutan dyker upp
    });            // där man klickar.
  }

  ionLoadVenues() { // Kommer att hämta olika arenor info från API
    this.provider.obtainTransport()
    .subscribe(
      (data)=> {this.stations = data;},
      (error)=> {console.log(error);}
    )
  }

}
