import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VenuePage } from '../venue/venue';
/*import { AboutPage } from '../about/about';*/

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
/*This is how to create the link to another page for a button,
need to import the page we are navigating to aswell*/
navigateToVenue():void
  { this.navCtrl.push(VenuePage);
  }
}


/*Typescript comment*/
