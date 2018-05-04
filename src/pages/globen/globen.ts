import { Component } from '@angular/core';
import { NavController, ViewController, PopoverController } from 'ionic-angular';
import { MapGullmarsplan } from '../mapGullmarsplan/mapGullmarsplan';
import { MapBlasut } from '../mapBlasut/mapBlasut';
import { MapSkarmarbrink } from '../mapSkarmarbrink/mapSkarmarbrink';
import { Info2Page } from '../info2/info2';
import { MapGlobenT } from '../mapGlobenT/mapGlobenT';
import { TravelInfo } from '../travelInfo/travelInfo';


@Component({
  selector: 'page-globen',
  templateUrl: 'globen.html'
})
export class GlobenPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

  }

  goToGlobenTunnelbana(params){
    this.navCtrl.push(MapGlobenT);
  }goToGullmarsplan(params){
    this.navCtrl.push(MapGullmarsplan);
  }goToBlasut(params){
    this.navCtrl.push(MapBlasut);
  }goToSkarmarbrink(params){
    this.navCtrl.push(MapSkarmarbrink);
  }goToInfo2(params){
    this.navCtrl.push(Info2Page);
  }
  openInfo(myEvent) {   // Skapar en PopOver-sida när man trycker på "i"
    let popover = this.popoverCtrl.create(TravelInfo);
    popover.present({
      ev: myEvent  // Skickar med klick-eventet så att rutan dyker upp
    });            // där man klickar.
  }
}
