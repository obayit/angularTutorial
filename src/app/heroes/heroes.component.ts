import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes()
    .subscribe( heroes => this.heroes = heroes);
  }

  add(name: string, heroName: string, image: string){
    heroName = heroName.trim();
    if(!heroName) { return; }
    this.heroService.add({name, heroName, image} as Hero).subscribe(
       hero => this.heroes.push(hero)
    );
  }

}
