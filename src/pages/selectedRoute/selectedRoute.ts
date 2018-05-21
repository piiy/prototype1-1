import { Component,ViewChild,ElementRef } from '@angular/core';
import { NavController, PopoverController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import {DisturbanceInfo} from '../disturbanceInfo/disturbanceInfo';
import { TravelInfo2 } from '../travelInfo2/travelInfo2';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-selectedRoute',
  templateUrl: 'selectedRoute.html'
})

export class SelectedRoute {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  
  private venueId;
  public transport_type;
  departures;
  public routeName;
  public siteId;
  public aColor: string;
  public bColor: string;
  stationInformation;


  //ändra till dynamiska destinationer
  // destination = Venue
  // MyLocation = Stationsnamn, Transport_type
  Destination: any = 'Kista';
  MyLocation: any = 'Sollentuna,Train';

  constructor(public navCtrl: NavController, public provider: ApiProvider, public popoverCtrl: PopoverController, public navParams: NavParams, public geo: Geolocation) {
    this.routeName = navParams.get("routeName");
    this.siteId = navParams.get("siteId");
    this.transport_type = navParams.get("transport_type");
    this.venueId = navParams.get("venueId");

    this.getDepartures(this.siteId);
    setInterval(() => {
      console.log('timer');
      this.getDepartures(this.siteId);
    },60000);
    this.getStationInformation(this.venueId);

  }

  ionViewDidLoad(){
    this.calculateAndDisplayRoute();
  }

  calculateAndDisplayRoute() {
    let that = this;
    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
    });
    directionsDisplay.setMap(map);

    var image = {
      url: '/assets/imgs/pos_icon.png',
      scaledSize: new google.maps.Size(30, 48),
    };

    this.geo.getCurrentPosition().then((position) => {
      var myLatLng =  {lat: position.coords.latitude, lng: position.coords.longitude};
      var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon :image,
      });
    }, (err) => {
      console.log(err);
    });

    directionsService.route({
      // byt myLocation = Venue;
      origin: this.MyLocation,
      // byt Destination = "routeName,Transport_type_name";
      destination: this.routeName,
      travelMode: 'WALKING'
    }, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  getDepartures(siteId:string) {
    console.log("Uppdaterar");
    this.provider.getDepartures(siteId)
    .subscribe(
      (data) => {

        if(this.transport_type == '1') {
          this.departures = data["ResponseData"].Metros;
        } else if(this.transport_type == '2') {
          this.departures = data["ResponseData"].Trams;
        } else if(this.transport_type == '3') {
          this.departures = data["ResponseData"].Buses;
        }

      },
      (error) => {console.log("Error: ", JSON.stringify(error));}
    )
  }

this.provider.getDepartures(siteId)
.subscribe(
 (data) => {

if(this.transport_type == '1') {
  try{
 this.departures = data["ResponseData"].Metros;
}catch( err){console.log("errormessage");
alert("There is a problem with loading the departures at this time, please try again!");
}
} else if(this.transport_type == '2') {
  try{
 this.departures = data["ResponseData"].Trams;
 }catch( err){console.log("errormessage");
alert("There is a problem with loading the departures at this time, please try again!");}
} else if(this.transport_type == '3') {
  try{
 this.departures = data["ResponseData"].Buses;
 }catch( err){console.log("errormessage");
alert("There is a problem with loading the departures at this time, please try again!");
}
}


 },
 (error) => {console.log("Error: ", JSON.stringify(error));}
)

 }


  openDisturbanceInfo(myEvent) { // Skapar popup-sida med störningsinfo.

    let popover = this.popoverCtrl.create(DisturbanceInfo, {siteId: this.siteId});
    popover.present({
      ev: myEvent
    });
  }


  openInfo(myEvent) {   // Skapar en PopOver-sida när man trycker på "i"
  let popover = this.popoverCtrl.create(TravelInfo2);
  popover.present({
    ev: myEvent
  });
}
getStationInformation(venue:string) { // Kommer att hÃ¤mta olika stationer frÃ¥n API
  this.provider.getStations(venue)
  .subscribe(
    (data)=> {
      this.stationInformation=data["results"];
      this.changeColors();
    },
    (error)=> {console.log("error: ", JSON.stringify(error));}
  )
}
changeColors(){
  var size = Object.keys(this.stationInformation).length;
  for(let i = 0; i < size; i++){
    console.log("Transport_type: ", this.stationInformation[i].transport_type);
    if(this.stationInformation[i].e_name==this.routeName&&this.stationInformation[i].transport_type==this.transport_type){
      console.log("Ja!");
      this.aColor = this.stationInformation[i].color_hex;
      this.bColor = this.stationInformation[i].color_hex;
    }
  }
}

}
