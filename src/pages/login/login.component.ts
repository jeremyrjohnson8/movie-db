import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { debug } from 'util';
import { Router } from '@angular/router/';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "";
  passWord: string = "";
  constructor(public afAuth: AngularFireAuth, public router: Router) {
    console.log(afAuth.authState);
    afAuth.authState.subscribe((user: any) => {
      if (user.uid) {
        router.navigate([`landing/`, user.uid]);
      }
    })
  }

  ngOnInit() {
  }

  public signUp(): void {

  }
  public onLogin(username: string, password: string): void {
    if (username != null && password != null) {

      firebase.auth().signInWithEmailAndPassword(username, password).catch(function (error: any) {
        var errorMessage = error.message;
        var errorCode = error.code;

        if (errorMessage === 'auth/wrong-password' && firebase.auth().currentUser.uid != null) {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      }).then(i => {
        if (firebase.auth().currentUser != null) {
          //var x = firebase.auth().currentUser.uid;
          this.router.navigate(['landing/', firebase.auth().currentUser.uid]);
        }
      });
    }
  }
  public logout(): void {
    this.afAuth.auth.signOut();
  }
}
