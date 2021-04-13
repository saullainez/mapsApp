import { Component, OnInit } from '@angular/core';
import { Marker } from 'src/app/classes/marcador.class';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  markers: Marker[] = [];

  lat = 51.678418;
  lng = 7.809007;

  constructor() {
    const newMarker = new Marker(51.678418,  7.809007);
    this.markers.push(newMarker);
  }

  ngOnInit(): void {
  }

  addMarker(event){
    const coords: {lat: number, lng: number} = event.coords;
    const newMarker = new Marker(coords.lat,  coords.lng);
    this.markers.push(newMarker);
    console.log(event);
  }

}
