import { Component } from '@angular/core';

@Component({
  selector: 'src-data-binding',
  template: `<img [src]="imageUrl" />`,
})
export class SrcDataBindingComponent {
  imageUrl = './assets/laptop.jpg';
}
