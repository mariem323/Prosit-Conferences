import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Conference {
  id: number;
  title: string;
  description: string;
  date: string;
  place: string;
  maxParticipants: number;
  nbParticipants: number;
}

@Component({
  selector: 'app-list-conf',
  standalone: true,
  imports: [FormsModule, DatePipe, UpperCasePipe],
  templateUrl: './list-conf.html',
  styleUrl: './list-conf.css',
})
export class ListConf {
  searchTerm = '';

  conferences: Conference[] = [
    { id: 1, title: 'Angular 21 Conference', description: 'Découvrez les nouveautés d’Angular et échangez autour des composants et du data binding.', date: '2027-11-15T18:00:00', place: 'Tunis', maxParticipants: 100, nbParticipants: 75 },
    { id: 2, title: 'Signals Workshop', description: 'Un atelier pratique pour mieux comprendre les Signals et les interfaces réactives.', date: '2027-11-30T18:00:00', place: 'Ariana', maxParticipants: 30, nbParticipants: 24 },
    { id: 3, title: 'Web Conference', description: 'Une rencontre autour des tendances et des outils qui façonnent le web.', date: '2027-11-20T18:00:00', place: 'Sousse', maxParticipants: 50, nbParticipants: 50 },
  ];

  get filteredConferences(): Conference[] {
    const query = this.searchTerm.trim().toLocaleLowerCase('fr');
    return this.conferences.filter((conference) =>
      new Date(conference.date).getTime() >= Date.now() &&
      conference.title.toLocaleLowerCase('fr').includes(query),
    );
  }

  remainingPlaces(conference: Conference): number {
    return conference.maxParticipants - conference.nbParticipants;
  }

  buttonColor(conference: Conference): string {
    const places = this.remainingPlaces(conference);
    if (places === 0) return '#ce2727';
    if (places < 10) return '#e67e00';
    return '#178747';
  }

  register(conference: Conference): void {
    if (this.remainingPlaces(conference) > 0) conference.nbParticipants += 1;
  }
}
