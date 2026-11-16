import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.html',
  styleUrl: './banner.css',
})
export class Banner {
  readonly title = 'Conference App';
  readonly subtitle = 'Bienvenue sur votre espace utilisateur';
}
