import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yemek23';
  constructor(private router: Router) {
    // Sayfa yüklendiğinde /index rotasına yönlendirme
    this.router.navigate(['/index']);
}
}
