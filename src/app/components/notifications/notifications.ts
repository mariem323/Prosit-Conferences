import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  showNotifications = false;
  readonly notifications = [
    'Votre inscription à Angular 21 Conference est confirmée.',
    'Sarra a rejoint la conférence Signals Workshop.',
  ];
}
