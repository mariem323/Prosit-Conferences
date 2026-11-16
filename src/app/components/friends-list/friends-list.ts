import { Component } from '@angular/core';

@Component({
  selector: 'app-friends-list',
  standalone: true,
  imports: [],
  templateUrl: './friends-list.html',
  styleUrl: './friends-list.css',
})
export class FriendsList {
  readonly friends = [
    { name: 'Sami', status: 'En ligne', initials: 'SA' },
    { name: 'Sarra', status: 'À une conférence', initials: 'SR' },
    { name: 'Amine', status: 'En ligne', initials: 'AM' },
  ];
}
