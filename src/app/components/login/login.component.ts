import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  constructor(private authService: AuthService, private router: Router, private flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
  }

  signIn() {
    this.authService.login(this.email, this.password)
        .then((res) => {
        this.flashMessagesService.show( 'Welcome to your account ', {
          cssClass: 'alert-success',
          timeout: 3000
        });
        this.router.navigate(['/']);
    })
        .catch((err) => console.error(err));
  }

  signInGoogle() {
    this.authService.loginGoogleAccount()
        .then((res) => this.router.navigate(['/']))
        .catch((err) => console.error(err))
  }

}
