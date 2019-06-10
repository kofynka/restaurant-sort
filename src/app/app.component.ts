import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './services/restaurant.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  restaurants = [];
  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.loadAllRestaurants();
  }

  private loadAllRestaurants() {
    this.restaurantService.fetchRestaurantList().pipe(first()).subscribe(data => {
      this.restaurants = data.slice(0, 1000);

    });
  }
}
