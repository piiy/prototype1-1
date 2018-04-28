import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapGullmarsplan } from '../mapGullmarsplan/mapGullmarsplan';
import { MapBlasut } from '../mapBlasut/mapBlasut';
import { MapSkarmarbrink } from '../mapSkarmarbrink/mapSkarmarbrink';
import { Info2Page } from '../info2/info2';
import { MapGlobenT } from '../mapGlobenT/mapGlobenT';

@Component({
  selector: 'page-globen',
  templateUrl: 'globen.html'
})
export class GlobenPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
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

}
