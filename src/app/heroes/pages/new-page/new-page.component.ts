import { Component } from '@angular/core'
import { HeroesService } from '../../services/heroes.service'
import { FormControl, FormGroup } from '@angular/forms'
import { Publisher } from '../../interfaces/hero.interface';

@Component({
  selector: 'new-hero',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent {

    public heroForm = new FormGroup({
    id:               new FormControl<string>(''),
    superhero:        new FormControl<string>('', { nonNullable:true}),
    publisher:        new FormControl<Publisher>(Publisher.DCComics),
    alter_ego:        new FormControl(''),
    first_appearance: new FormControl(''),
    characters:       new FormControl(''),
    alt_img:          new FormControl(''),
    });

    public publishers = [
      {id: 'DC Comics', desc: 'DC - Comics'},
      {id: 'Marvel Comics', desc: 'Marvel - Comics'}
    ];

    constructor(private heroesService:HeroesService) {}

    onSubmit(): void {

    }
}
