import { Component, OnInit } from '@angular/core';
import { GeolocationService } from '../geolocation.service';

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.css']
})
export class GmapComponent implements OnInit {
  lat: number 
  lng: number
  constructor(private geolocation :GeolocationService) { }

  ngOnInit() {
    this.geolocation.getCoordinates().subscribe(response =>{
      this.lat= response.coords.latitude;
      this.lng=response.coords.longitude;
      console.log('this.lat',this.lat)
    })
  }

}
