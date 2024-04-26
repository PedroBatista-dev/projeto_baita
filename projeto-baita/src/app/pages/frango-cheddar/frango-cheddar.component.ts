import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-frango-cheddar',
  templateUrl: './frango-cheddar.component.html',
  styleUrls: ['./frango-cheddar.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class FrangoCheddarComponent {

}
