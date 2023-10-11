import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent {

  constructor(
    private authService: AuthService,
    private router: Router) {}

  OnLogin(): void {
    this.authService.login('dalarconlopez73@gmail.com','afsgdfsafgdfs.DASDwewqew.321313csdd')
    .subscribe( user => {
      this.router.navigate(['/']);
    })
  }

}
