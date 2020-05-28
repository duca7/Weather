import { SingupComponent } from './../singup/singup.component';
import { AuthService } from './../../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public afAuth: AngularFireAuth,
    public snackBar: MatSnackBar,
    public auth : AuthService,
    public router: Router,


    ){ }
  hide= true;
  ngOnInit(): void {
  }
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);

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


  loginOnClick() {
    this.dialog.open(SingupComponent,{
      width: '30%',
      height: '60%'
    });
}

  signin() {
    this.afAuth.signInWithEmailAndPassword(this.email.value, this.password.value).then(() => {
      this.snackBar.open('Success!', 'OK', {duration: 2000});
      this.router.navigate(['Home']);
    }).catch((err) => {
      this.snackBar.open(err, 'OK', {duration: 2000});
    });

  }

  loginWithGG() {
    this.auth.loginWithGG().then(()=>{
      this.router.navigate(['Home']);
    });
 }
}
