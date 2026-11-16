import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  readonly menuItems = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'Profil', href: '#profil' },
    { label: 'Conférences', href: '#conferences' },
    { label: 'Amis', href: '#amis' },
    { label: 'Notifications', href: '#notifications' },
    { label: 'Admin', href: '#admin' },
  ];
}
