import { HeroService } from './../hero.service';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // heroes = HEROES;
  heroes: Hero[];
  // hero: Hero = {id: 1, name: 'Windstorm'};

  // selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

   getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
   }


   add(name: string): void {
     name = name.trim();
     if (!name) {return; }
      this.heroService.addHero({ name } as Hero)
      .subscribe(
        hero => {this.heroes.push(hero); }
      );
   }

   delete(hero: Hero): void {
     this.heroes = this.heroes.filter(x => x !== hero);
     this.heroService.deleteHero(hero).subscribe();
   }


  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

}
