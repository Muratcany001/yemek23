import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  mail:string = "";
  password:string = "";
  constructor(private apiService:ApiService){}

  onLogin():void {
    const credentials = {
      mail:this.mail,
      password:this.password
    }
    this.apiService.login(credentials).subscribe((res)=>{
      console.log("Giriş başarılı",res);
    },
    (error)=>{
      console.error("Giriş hatası",error);
    }
  )
  }

}

