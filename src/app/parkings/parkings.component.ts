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
  constructor(private parkingService: ParkingService) { }

  ngOnInit(): void {
  this.parkingService.getParkings().subscribe(
    (    reponse: ParkingInfo[]) => {
      this.parkings = reponse;
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

}
