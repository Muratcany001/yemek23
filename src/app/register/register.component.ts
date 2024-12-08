import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone:true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.Emulated, // Varsayılan encapsulation
})
export class RegisterComponent implements OnInit {
  userName: string = '';
  userEmail: string = '';
  userPassword: string = '';
  
  constructor() { }
  ngOnInit(): void {
    console.log("Register component loaded!");
  }
  registerUser(): void {
    if (this.userName && this.userEmail && this.userPassword) {
      console.log("Kullanıcı kaydedildi:", this.userName, this.userEmail);
    } else {
      console.log("Lütfen tüm alanları doldurun!");
    }
  }
}
