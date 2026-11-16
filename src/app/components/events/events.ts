import { Component } from '@angular/core';
import { FriendsList } from '../friends-list/friends-list';
import { Notifications } from '../notifications/notifications';
import { UserProfile } from '../user-profile/user-profile';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [UserProfile, FriendsList, Notifications],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {}
