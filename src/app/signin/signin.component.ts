import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './signin.component.html', 
  styleUrls: ['./signin.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SigninComponent implements OnInit {
  mail: string = "";
  password: string = "";
  errorMessage: string = "componente ulaşılamıyor";
  
  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.errorMessage = "";
  }

  onLogin(): void {
    // Reset error message
    this.errorMessage = "";

    // Validate inputs
    if (!this.mail || !this.password) {
      this.errorMessage = "Email ve şifre gereklidir";
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.mail)) {
      this.errorMessage = "Geçerli bir email adresi giriniz";
      return;
    }

    const credentials = {
      mail: this.mail.trim(),
      password: this.password
    }

    this.apiService.login(credentials).subscribe({
      next: (res) => {
        // Store token in localStorage
        if (res && res.token) {
          localStorage.setItem('token', res.token);
          // Use Angular Router instead of window.location
          this.router.navigate(['/home']);
        } else {
          this.errorMessage = "Giriş başarısız";
        }
      },
      error: (error) => {
        this.errorMessage = error?.error?.message || "Giriş hatası oluştu";
        console.error("Login error:", error);
      }
    });
  }
}