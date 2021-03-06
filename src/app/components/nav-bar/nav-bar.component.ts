import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { SET_LOCATION } from '../location-reducer';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  loc: string;
  avt ='';
  constructor(
    public router: Router,
    public auth: AuthService,
    public afAuth: AngularFireAuth,
    public snackBar: MatSnackBar,
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.afAuth.user.subscribe((user) => {
      if (!user.emailVerified) {
        user.sendEmailVerification().then(() => {
          this.snackBar.open('Bye Bye, See You!!!', 'OK', {duration: 5000});
        }).catch((err) => {
          this.snackBar.open(err, 'OK', {duration: 5000});
        });
      }
      this.avt = user.photoURL;
    });
  }

  signout(){
    return this.afAuth.signOut().then(() =>{
      this.router.navigate(['Head']);
    })
  }

  search(searchForm: NgForm) {
    if (searchForm.invalid) {
      return;
    }
    this.store.dispatch({ type: SET_LOCATION, payload: this.loc });
  }
}
