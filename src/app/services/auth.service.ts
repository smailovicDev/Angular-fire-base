import { UserComplement } from './../UserComplement';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from './../User';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usersCollection: AngularFirestoreCollection;
  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.usersCollection = this.afs.collection('users');
   }

  register(user: User) {
    return  this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }
  registerUser( user) {

    return this.usersCollection.add(user);
  }

  login(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  loginGoogleAccount() {
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  user() {
    return this.afAuth.user;
  }

  signOut() {
    return this.afAuth.auth.signOut();
  }

  getUserById( id ) {
    console.log( id );
    //return this.usersCollection.
   // ;
  }
}

