import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  is_authenticated = null;
  user: User = new User();
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.authService.user().subscribe(user => this.is_authenticated = user);
    this.getConnectedUser();
  }

  logOut() {
    this.authService.signOut()
        .then(() => this.router.navigate(['/login']))
        .catch((err) => console.error(err));
  }

  getConnectedUser() {
    // this.authService.user().subscribe( usr => {
    //   this.authService.getUserById( usr.uid).subscribe( res => {

    //     console.log( res );
    //   });
    // });
  }

}
