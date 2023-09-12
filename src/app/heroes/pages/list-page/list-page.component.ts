import { Component, OnInit, inject } from '@angular/core';

import { HeroesService } from '../../services/heroes.service';

import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [
  ]
})
export class ListPageComponent implements OnInit {
  public heroes : Hero[]=[];

  private heroesService = inject(HeroesService);

  ngOnInit(): void {
    this.heroesService.getHeroes()
      .subscribe( heroes => {
        this.heroes = heroes
      })
  }

}
