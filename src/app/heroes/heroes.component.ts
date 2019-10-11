import { Component, OnInit } from '@angular/core';
import { HEROES, Hero } from '../Hero';
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  onSelect = (hero: Hero): void => {
    this.selectedHero = hero;
    console.log('selected', this.selectedHero.name);
  }

  getHeroes = (): void => {
    this.heroes = this.heroService.getHeroes();
  }

  constructor(private heroService: HeroService) {
   }

  ngOnInit() {
    this.getHeroes();
  }

}
