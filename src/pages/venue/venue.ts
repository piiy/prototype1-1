import { Component } from '@angular/core';
import { PopoverController, ViewController, NavController } from 'ionic-angular';
import { VenueInfo } from '../venueInfo/venueInfo';
import { GlobenPage} from '../globen/globen';

@Component({
  templateUrl: 'venue.html'
})

export class VenuePage {
  venues;

  constructor(public popoverCtrl: PopoverController, public navCtrl: NavController ) {
    this.initializeVenues();

  }

  initializeVenues() {  // Initierar lista med olika arenor
    this.venues = [
      {name: 'Ericsson Globe', id: 1},
      {name: 'Hovet', id: 2},
      {name: 'Annexet', id: 3},
      {name: 'Tele2 Arena', id: 4},
      {name: 'Friends Arena', id: 5},
      {name: 'Stockholms Stadion', id: 6},
      {name: 'Berns', id: 7},
      {name: 'Cirkus', id: 8}
    ];
  }

  getVenues(ev) {
    this.initializeVenues();  // Återställer lista till alla arenor

    let val = ev.target.value;  // Sätter 'val' till värdet av 'ev'

    if(val && val.trim() != '') {  // Filtrerar så länge det inte är en tom sträng
      this.venues = this.venues.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  openInfo(myEvent) {   // Skapar en PopOver-sida när man trycker på "i"
    let popover = this.popoverCtrl.create(VenueInfo);
    popover.present({
      ev: myEvent  // Skickar med klick-eventet så att rutan dyker upp
    });            // där man klickar.
  }

  goToPage():void
  {  this.navCtrl.push(GlobenPage);}

}
