import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'index', component: IndexComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'restaurant', component: RestaurantComponent },
  // { path: '', redirectTo: '/index', pathMatch: 'full' }, // Varsayılan yönlendirme
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true}), HttpClientModule],
  exports: [RouterModule]                   
})
export class AppRoutingModule {}
