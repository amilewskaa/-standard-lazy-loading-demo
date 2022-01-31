import { Component } from '@angular/core';

@Component({
  selector: 'app-module-2',
  template: `<app-card [imageSrc]="module2imageSrc">
    Module 2 is lazy loaded
  </app-card> `,
})
export class Module2Component {
  module2imageSrc =
    'https://images.ctfassets.net/v3n26e09qg2r/saRkNGS7T8caJjhT1qmke/61f698723b40a6a7c9b5dcbdd59ad35c/Vector__2_.svg';
}
