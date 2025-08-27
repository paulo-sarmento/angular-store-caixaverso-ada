import { Component, inject } from '@angular/core';
import { Auth } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  credentials = {
    username: '',
    password: '',
  };

  private auth = inject(Auth);
  private route = inject(Router);

  onSubmit(form: NgForm) {
    this.auth.login(this.credentials).subscribe({
      next: (res) => {
        this.auth.saveTokenToLocalStorage(res.token);
        this.route.navigate(['/home']);
        this.auth.isLoggedIn();

        form.reset();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
