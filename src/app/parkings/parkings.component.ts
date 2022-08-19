import { Component, OnInit } from '@angular/core';
import {ParkingInfo} from '../parkingInfo';
import {ParkingService} from '../parking.service';

@Component({
  selector: 'app-parkings',
  templateUrl: './parkings.component.html',
  styleUrls: ['./parkings.component.scss']
})
export class ParkingsComponent implements OnInit {

  parkings: ParkingInfo[] = [];
  isLoaded: boolean = false;
  constructor(private parkingService: ParkingService) { }

  ngOnInit(): void {
  this.parkingService.getParkings().subscribe(
    (    reponse: ParkingInfo[]) => {
      this.parkings = reponse;
      this.isLoaded = true;
    }
  );
  }


  calculStyleStatut(parking: ParkingInfo){
    if(parking.statut === 'Le parking est ouvert'){
      return {color: 'green'}
    }else if (parking.statut === 'Le parking est réservé aux abonné.e.s.'){
      return {color: 'orange'}
    }else if (parking.statut === 'Le parking est fermé'){
      return {color: 'red'}
    } else {
      return { 'font-style': 'italic'}
    }
  }

      orientationNombrePlaces(parking: ParkingInfo){
        if(parking.nbPlacesDispo >= 30){
          return {color: 'green'}
        }else if (parking.nbPlacesDispo < 10 ){
            return {color: 'orange'}
          } else if (parking.nbPlacesDispo === 0){
            return {color: 'red'}
          } else {
            return {'font-style' : 'italic'}
          }
        }
      }
  


