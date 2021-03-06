import { AuthService } from './../../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  hide = true;

  constructor(
    public dialogRef: MatDialogRef <SingupComponent>,
    public afAuth: AngularFireAuth,
    public snackBar: MatSnackBar,
    public auth : AuthService,
    public router: Router,
    ) { }
    ngOnInit(){

    }
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  retypePassword = new FormControl('', [Validators.required, Validators.pattern(this.password.value)]);
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  getPasswordError() {
    return this.password.hasError('required') ? 'You must enter a password' :
        this.password.hasError('minLength') ? 'You password must have 8 characters' :
          '';
  }

  getRetypePasswordError() {
    return this.retypePassword.hasError('required') ? 'You must enter a password' :
        this.retypePassword.hasError('pattern') ? 'You must retype exactly' :
          '';
  }

   signUp() {
    if (this.password.value !== this.retypePassword.value) {
      this.snackBar.open('Retyped password does not match!!', 'OK', {duration: 2000});
      return;
    }
    this.afAuth.createUserWithEmailAndPassword(this.email.value, this.password.value).then(() => {
      this.snackBar.open('Success!', 'OK', {duration: 2000});
      this.email.reset();
      this.password.reset();
      this.retypePassword.reset();
      this.router.navigate(['Home']);
    }).catch((err) => {
      this.snackBar.open(err, 'OK', {duration: 2000});
    });
  }

}
