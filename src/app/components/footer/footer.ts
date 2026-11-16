import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  readonly usefulLinks = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'Conférences', href: '#conferences' },
    { label: 'Événements', href: '#evenements' },
    { label: 'Communauté', href: '#amis' },
  ];
}
