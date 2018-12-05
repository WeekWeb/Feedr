import { Component, Input, ViewChild, NgZone, OnInit } from '@angular/core';
import {EventService} from "../event.service";
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';

interface Coords {
  lati: number;
  lngi: number;
}



declare var google: any;

@Component({
  selector: 'app-google-map-frame',
  templateUrl: './google-map-frame.component.html',
  styleUrls: ['./google-map-frame.component.css']
})
export class GoogleMapFrameComponent implements OnInit {
  latitude = 29.64833;
  longitude = -82.34944;
  public markers =  Array<Coords>();
  czoom = 14;
  public events;
  public addresses = new Array();
  geocoder:any;



  @ViewChild(AgmMap) map: AgmMap;

  constructor(private eventService: EventService, public mapsApiLoader: MapsAPILoader, private zone: NgZone,
              private wrapper: GoogleMapsAPIWrapper) {
    this.mapsApiLoader = mapsApiLoader;
    this.zone = zone;
    this.wrapper = wrapper;
    this.mapsApiLoader.load().then(() => {
      this.geocoder = new google.maps.Geocoder();
      this.markers =  new Array<Coords>();
     // console.log("Hey")
    });

  }

  ngOnInit() {
    this.eventService.getAllEvents().subscribe((data) => this.events = data ,error1 => {},()=> {

      for (let event of this.events) {
        this.addresses.push(event.location)

      }

      this.addresses.forEach(address => {

        this.mapsApiLoader.load().then(() => {
          this.geocoder.geocode({'address': address}, (results, status) => {
              // console.log(results);
              // console.log(status);

              //console.log(results[0].geometry.location.lat())
              if (status == google.maps.GeocoderStatus.OK) {
                if (results[0].geometry.location) {

                  let m: Coords = {
                    lati: 0,
                    lngi: 0,
                //    name: "Event",
                  };

                  m.lati = results[0].geometry.location.lat();
                  m.lngi = results[0].geometry.location.lng();
                 // m.name = event.name;
                  console.log(m)
                  this.markers.push(m);

                  //   console.log(this.markers)


                }
              }

            }
          )
        });


      });


     // console.log(this.markers)
     // console.log(this.addresses)
     // console.log(this.lngs)



    });


  }




}
