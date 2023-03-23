import { Injectable } from '@angular/core';

interface EmailError {
  error: boolean;
  message: string;
}

const EMAIL_REGEX_VALIDATION = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

@Injectable({ providedIn: 'root' })
export class EmailService {
  public getEmailError(email: string, error: EmailError): EmailError {
    const emailError = { ...error };
    const isEmailValid = this.isEmailValid(email);

    if (isEmailValid) {
      emailError.error = false;
      return emailError;
    }
    emailError.error = true;
    return emailError;
  }

  public isEmailValid(email: string): boolean {
    const regex = new RegExp(EMAIL_REGEX_VALIDATION);
    return regex.test(email);
  }
}