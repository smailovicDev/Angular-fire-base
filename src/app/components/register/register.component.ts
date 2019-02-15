import { UserComplement } from './../../UserComplement';

import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email = "";
  password = "";
  user: User = new User();
  userComplement: UserComplement = new UserComplement();
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  addUser() {

    this.authService.register(this.user)
        .then( (res) => {
          console.log( res);
          this.authService.registerUser(this.copy(this.user.nom, this.user.prenom, res.user.uid  ))
          .then( () => this.router.navigate(['/']) );

         // this.router.navigate(['/']);
        })
        .catch((err) => console.log(err));
  }

  copy( Nom: string , Prenom: string, Id: string ) {
    return { nom: Nom, prenom: Prenom , id: Id };
  }

}
