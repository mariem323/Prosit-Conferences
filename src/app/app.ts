import { Component } from '@angular/core';
import { Events } from './components/events/events';
import { Footer } from './components/footer/footer';
import { Banner } from './components/banner/banner';
import { ListConf } from './components/list-conf/list-conf';
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Banner, Navbar, Events, ListConf, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
