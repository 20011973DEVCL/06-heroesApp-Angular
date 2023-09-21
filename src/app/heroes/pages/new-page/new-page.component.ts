import { Component } from '@angular/core';

@Component({
  selector: 'new-hero',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent {
 public publishers = [
  {id: 'DC Comics', desc: 'DC - Comics'},
  {id: 'Marvel Comics', desc: 'Marvel - Comics'}
 ]
}
