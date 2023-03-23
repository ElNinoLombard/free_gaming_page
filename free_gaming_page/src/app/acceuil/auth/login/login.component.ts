import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { EmailService } from 'src/app/services/email/email.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  hide = true;
  public form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  public _loginError400 = new BehaviorSubject<boolean>(false);
  public _loginError401 = new BehaviorSubject<boolean>(false);

  public errors = {
    email: {
      error: false,
      message: `Format d'email incorrect`
    },
    password: {
      error: false,
      message: 'Le mot de passe est obligatoire'
    }
  };

  constructor(private dialogRef: MatDialogRef<LoginComponent>,
  private emailService: EmailService,) { }

  ngOnInit(): void {
  }

    emailValidator(c: AbstractControl) {
    return this.emailService.isEmailValid(c.value)
      ? null
      : {
          email: {
            valid: false
          }
        };
  }

  handlePasswordError(value: string) {
    const isEmptyString = value.length === 0;
    if (isEmptyString) {
      this.errors.password.error = true;
      return;
    }
    this.errors.password.error = false;
  }

  handleEmailError(value: string) {
    this.errors.email = this.emailService.getEmailError(
      value,
      this.errors.email
    );
  }


  closeDialog() {
    this.dialogRef.close();
  }

}
