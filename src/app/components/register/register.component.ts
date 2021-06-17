import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {NotifierService} from '../../services/notifier.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerAccountForm = new FormGroup({
      username: new FormControl(undefined, Validators.required),
      password: new FormControl(undefined, [Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%?&])[A-Za-z\d$@$!%?&]{8,}$/)]),
    },
  );

  private errormessage: string;

  constructor(private authService: AuthenticationService, private notifierService: NotifierService) {
  }

  ngOnInit(): void {
  }

  Register() {
    this.authService.register(this.registerAccountForm.value.username, this.registerAccountForm.value.password)
      .subscribe(() => {
        this.notifierService.showNotification("Registration completed", 'success')
      });
  }

  getUsernameErrorMessage() {
    if (this.registerAccountForm.controls['username'].touched) {
      if (this.registerAccountForm.controls['username'].hasError('required')) {
        this.errormessage = 'Username cannot be empty';
        return 'Invalid username entry'
      }
    }
  }

  getPasswordErrorMessage() {
    if (this.registerAccountForm.controls['password'].touched) {
      if (this.registerAccountForm.controls['password'].hasError('required') ||
        this.registerAccountForm.controls['password'].hasError('pattern')) {
        this.errormessage = 'Password must contain at least: one lowercase letter, one uppercase letter, one number, one special character and atleast eight total characters'
      }
      else {
        this.errormessage = 'Passwords must match'
      }
      return 'Invalid password entry'
    }
  }

  getErrorMessage() {
    return this.errormessage;
  }
}

