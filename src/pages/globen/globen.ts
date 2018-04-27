import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/* import { GlobenTunnelbanaPage } from '../globen-tunnelbana/globen-tunnelbana';
import { GullmarsplanPage } from '../gullmarsplan/gullmarsplan';
import { BlSutPage } from '../bl-sut/bl-sut';
import { SkRmarbrinkPage } from '../sk-rmarbrink/sk-rmarbrink';*/
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
  }/*goToGullmarsplan(params){
    if (!params) params = {};
    this.navCtrl.push(GullmarsplanPage);
  }goToBlSut(params){
    if (!params) params = {};
    this.navCtrl.push(BlSutPage);
  }goToSkRmarbrink(params){
    if (!params) params = {};
    this.navCtrl.push(SkRmarbrinkPage);
  }*/
  goToInfo2(params){
    if (!params) params = {};
    this.navCtrl.push(Info2Page);
  }

}
