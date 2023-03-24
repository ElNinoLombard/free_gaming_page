import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

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

  constructor(private dialogRef: MatDialogRef<RegisterComponent>,
    private emailService: EmailService,
    private dialog: MatDialog) { }

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

}
