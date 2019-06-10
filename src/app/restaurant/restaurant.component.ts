import { Component, OnInit, Input } from '@angular/core';

import { Restaurant } from './restaurant';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})

export class RestaurantComponent{
  @Input() Restaurant: Restaurant;
}
