import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {NotificationComponent} from '../notification.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) { }

  showNotification(displayMessage: string, type: 'error' | 'success' | 'alert'): void {
    this.snackBar.openFromComponent(NotificationComponent, {
      data: {
        message: displayMessage,
      },
      duration: 4000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: type
    });
  }

}
