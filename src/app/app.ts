import { Component, inject, signal } from '@angular/core';
import { Auth } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-store-ada');
  auth = inject(Auth);

  onLogout() {
    this.auth.logout();
  }
}
