import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userName: string = '';
  userEmail: string = '';
  userPassword: string = '';
  emailAlreadyExists: boolean = false;

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Initialize component
  }

  onRegister(): void {
    // Form validation
    if (!this.userName || !this.userEmail || !this.userPassword) {
      alert('Lütfen tüm alanları doldurun!');
      return;
    }
  
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.userEmail)) {
      alert('Geçerli bir email adresi giriniz!');
      return;
    }
  
    // Password validation (minimum 6 characters)
    if (this.userPassword.length < 6) {
      alert('Şifre en az 6 karakter olmalıdır!');
      return;
    }
  
    const user = {
      User_Name: this.userName,
      User_Email: this.userEmail,
      User_Password: this.userPassword,
      FavoriteRestaurantIds: []
    };
  
    console.log('Gönderilen kullanıcı:', user);
  
    this.apiService.register(user).subscribe({
      next: (response) => {
        console.log('Kayıt başarılı:', response);
        alert('Kayıt başarılı!');
        this.router.navigate(['/signin']);
      },
      error: (error) => {
        console.error('Kayıt işlemi sırasında hata oluştu:', error);
        if (error?.error?.message === 'Email already exists') {
          this.emailAlreadyExists = true;
        } else {
          console.log('Error details:', error);
          alert(`Kayıt sırasında hata: ${error?.error?.message || error?.message || 'Bilinmeyen hata'}`);
        }
      }
    });
  }  
}
