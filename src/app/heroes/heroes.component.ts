import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  
  constructor(private heroService: HeroService) {
   }
   
  getHeroes = (): void => {
   this.heroService.getHeroes()
    .subscribe(result => this.heroes = result);
  }


  ngOnInit() {
    this.getHeroes();
  }

}
