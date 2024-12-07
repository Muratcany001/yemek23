import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { IndexComponent } from './index/index.component';  // Correct path

export const routes: Routes = [
//   { path: 'home', component: HomeComponent },
  { path: 'girisyap', component: SigninComponent },
  { path: 'kaydol', component: RegisterComponent },
  { path: 'index', component: IndexComponent },  // Correct routing
  { path: '', redirectTo: '/index', pathMatch: 'full' }  // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
