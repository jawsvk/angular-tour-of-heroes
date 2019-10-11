import { Component, OnInit } from '@angular/core';
import { HEROES, Hero } from '../Hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero: Hero;
  onSelect = (hero: Hero) => {
    this.selectedHero = hero;
    console.log('selected', this.selectedHero.name);
  }

  constructor() {
   }

  ngOnInit() {
  }

}
