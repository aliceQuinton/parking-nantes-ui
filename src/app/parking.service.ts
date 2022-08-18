import { Injectable } from '@angular/core';
import { ParkingInfo } from './parkingInfo';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  constructor(private httpClient: HttpClient) { }

  getParkings(): Observable<ParkingInfo[]>{
    return this.httpClient.get<ParkingInfo[]>('http://localhost:8080/api/parkings');
  }
}
