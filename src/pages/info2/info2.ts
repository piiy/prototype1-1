import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/*import { Provider1Provider } from '../../providers/provider1/provider1';*/

@Component({
  selector: 'page-info2',
  templateUrl: 'info2.html'
})
export class Info2Page {

  users;
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, /*public provider:Provider1Provider*/) {
  }

/*  ionViewDidLoad(){
    this.provider.getData()
    .subscribe(
      //JSON data is here and we pass it to a variabel
      (data)=> {this.users = data;},
      (error)=>{console.log(error);}
    )
  }*/
}
