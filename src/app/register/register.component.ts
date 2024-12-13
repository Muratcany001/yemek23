import { Component, OnInit, ViewEncapsulation } from '@angular/core';

/**
 * Component for user registration
 */
@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Default encapsulation
})
export class RegisterComponent implements OnInit {
  // User form fields
  userName: string = '';
  userEmail: string = '';
  userPassword: string = '';
  
  constructor() { }

  // Lifecycle hook
  ngOnInit(): void {
    console.log("Register component loaded!");
  }

  // Handle user registration
  onRegister(): void {
    if (this.userName && this.userEmail && this.userPassword) {
      console.log("Kullanıcı kaydedildi:", this.userName, this.userEmail);
    } else {
      console.log("Lütfen tüm alanları doldurun!");
    }
  }
}
