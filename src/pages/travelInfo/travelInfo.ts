import { ViewController } from 'ionic-angular';
import { Component } from '@angular/core'

@Component({
    template: `
     <ion-list-header align="center"><b>INFO</b></ion-list-header>
       <p align="center" margin=3px>
       The local transport is listed according to your position. The closest one comes first
       </p>   
       <p align="center" margin=3px>    
     A red warning triangel <ion-icon name="warning" item-center color="danger"></ion-icon>
      indicates a very crowded route. Consider taking another path.
      
     </p> 
    `
})
export class TravelInfo {
    constructor(public viewCtrl: ViewController) { }

    close() {
        this.viewCtrl.dismiss();
    }
}