import { Injectable } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';

@Injectable()
export class NotificationService {
  constructor(private notificationManager: ToastsManager) {}

  showErrorMessage(message: string) {
    this.notificationManager.error(message, 'Hiba');
  }

  showSuccessMessage(message: string) {
    this.notificationManager.info(message, 'Info');
  }
}
