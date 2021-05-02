import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(
    private snackBar: MatSnackBar
  ) {

    if(localStorage.getItem('markers')){
      this.markers = JSON.parse(localStorage.getItem('markers'));
    }

  }

  ngOnInit(): void {
  }

  addMarker(event){
    const coords: {lat: number, lng: number} = event.coords;
    const newMarker = new Marker(coords.lat,  coords.lng);
    this.markers.push(newMarker);

    this.storageSave();
  }

  storageSave() {
    localStorage.setItem('markers', JSON.stringify(this.markers));
    this.snackBar.open('Marcador agregado', 'Cerrar', { duration: 3000 });
  }

  deleteMarker(i:number){
    this.markers.splice(i, 1);
    this.storageSave();
    this.snackBar.open('Marcador eliminado', 'Cerrar', { duration: 3000 });
  }

}
