import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // 1. Bileşenin verilerini tutacak özellikler
  userName: string = '';
  userEmail: string = '';
  userPassword: string = '';
  
  // 2. Constructor - Servis veya başka bağımlılıkları buraya enjekte edebilirsiniz
  constructor() { }

  // 3. Yaşam döngüsü metodu (bileşen yüklendiğinde çalışacak)
  ngOnInit(): void {
    console.log("Register component loaded!");
  }

  // 4. Kullanıcı kaydı işlevi
  registerUser(): void {
    if (this.userName && this.userEmail && this.userPassword) {
      // Formu gönderebilir veya veritabanına kaydedebilirsiniz
      console.log("Kullanıcı kaydedildi:", this.userName, this.userEmail);
    } else {
      console.log("Lütfen tüm alanları doldurun!");
    }
  }
}
