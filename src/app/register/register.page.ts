import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.afAuth.authState
    .subscribe((user) => {
      console.log(user);
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  login() {
    const data = {
      email: 'nicolas@nicobytes.com',
      password: '1235455',
    };
    this.afAuth.auth.signInWithEmailAndPassword(data.email, data.password)
    .then((response) => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  }

  register() {
    const data = {
      email: 'nicolas@nicobytes.com',
      password: '1235455',
    };
    this.afAuth.auth.createUserWithEmailAndPassword(data.email, data.password)
    .then((response) => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  }

}
