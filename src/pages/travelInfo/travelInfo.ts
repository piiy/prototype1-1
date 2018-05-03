import { ViewController } from 'ionic-angular';
import { Component } from '@angular/core'

@Component({
    template: `
     <ion-list-header align="center"><b>INFO</b></ion-list-header>
       <p align="center" margin=3px>
       The local transport is listed according to your position. The closest one comes first
       </p>
       <p align="center" margin=3px>
     The <ion-icon name="md-walk"></ion-icon> icon
      indicates how crowded a route is. Red indicates that it is very crowded,
      orange that it is slightly crowded and green means that there is few people on the route.
     </p>
     <p align="center" margin=3px>
     If you click on a station you get to know more about the route.
     </p>
    `
})
export class TravelInfo {
    constructor(public viewCtrl: ViewController) { }

    close() {
        this.viewCtrl.dismiss();
    }
}
