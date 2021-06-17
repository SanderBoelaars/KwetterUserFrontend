import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {NotifierService} from '../../services/notifier.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  logInForm = new FormGroup({
    username: new FormControl(undefined, Validators.required),
    password: new FormControl(undefined, Validators.required),
  });


  constructor(private authService: AuthenticationService,
              private router: Router,
              private notifierService: NotifierService) {
  }

  ngOnInit(): void {
  }

  Authenticate() {
    this.authService.login(this.logInForm.value.username, this.logInForm.value.password)
      .subscribe((results) => {
        if (results != null) {
          localStorage.setItem('token', results.token)
          localStorage.setItem('userId', String(results.userId))
        }else{
          this.notifierService.showNotification("Login failed", 'error')
        }
        this.router.navigateByUrl('');
      });
  }
}
