import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-isca-tilapia',
  templateUrl: './isca-tilapia.component.html',
  styleUrls: ['./isca-tilapia.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class IscaTilapiaComponent {

}
