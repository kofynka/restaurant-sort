import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Restaurant} from '../restaurant/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  fetchRestaurantList() {
    return this.http.get<Restaurant[]>('../assets/establishment-data.json');
  }
}
