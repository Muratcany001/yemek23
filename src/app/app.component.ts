import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RestaurantComponent } from "./restaurant/restaurant.component";
import { IndexComponent } from "./index/index.component";
import { SigninComponent } from "./signin/signin.component";
import {RegisterComponent} from "./register/register.component"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RestaurantComponent, IndexComponent, SigninComponent, RegisterComponent,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yemek23';
  posts:any;
}
