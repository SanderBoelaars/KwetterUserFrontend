import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {NotifierComponent} from '../components/notifier/notifier.component';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor(private snackbar: MatSnackBar) { }

  showNotification(displayMessage: string, messageType: 'success' | 'error') {
    this.snackbar.openFromComponent(NotifierComponent, {
      data: {
        message: displayMessage,
      },
      duration: 3000,
      panelClass: messageType
    })
  }
}
