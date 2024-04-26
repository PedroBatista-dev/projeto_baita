import { trigger, style, animate, transition } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ])
    ]),
    trigger('imageClick', [
      transition('* => clicked', [
        animate('300ms', style({ transform: 'scale(1.1)' }))
      ])
    ])
  ]
})
export class InicioComponent {
  animationState = '';
  animationState1 = '';
  animationState2 = '';
  animationState3 = '';
  animationState4 = '';
  animationState5 = '';
  animationState6 = '';
  animationState7 = '';
  animationState8 = '';
  animationState9 = '';
  animationState10 = '';
  animationState11 = '';
  animationState12 = '';
  animationState13 = '';
  animationState14 = '';
  animationState15 = '';
  animationState16 = '';

  constructor(private router: Router) {}

  onClick(rota: string) {
    this.animationState = 'clicked';
    setTimeout(() => {
      this.router.navigate([rota]); // Substitua '/outra-tela' pela rota que você deseja navegar
    }, 300); // Tempo da animação em milissegundos
  }

  onClick1(rota: string) {
    this.animationState1 = 'clicked';
    setTimeout(() => {
      this.router.navigate([rota]); // Substitua '/outra-tela' pela rota que você deseja navegar
    }, 300); // Tempo da animação em milissegundos
  }

  onClick2(rota: string) {
    this.animationState2 = 'clicked';
    setTimeout(() => {
      this.router.navigate([rota]); // Substitua '/outra-tela' pela rota que você deseja navegar
    }, 300); // Tempo da animação em milissegundos
  }

  onClick3(rota: string) {
    this.animationState3 = 'clicked';
    setTimeout(() => {
      this.router.navigate([rota]); // Substitua '/outra-tela' pela rota que você deseja navegar
    }, 300); // Tempo da animação em milissegundos
  }

  onClick4(rota: string) {
    this.animationState4 = 'clicked';
    setTimeout(() => {
      this.router.navigate([rota]); // Substitua '/outra-tela' pela rota que você deseja navegar
    }, 300); // Tempo da animação em milissegundos
  }

  onClick5(rota: string) {
    this.animationState5 = 'clicked';
    setTimeout(() => {
      this.router.navigate([rota]); // Substitua '/outra-tela' pela rota que você deseja navegar
    }, 300); // Tempo da animação em milissegundos
  }

  onClick6(rota: string) {
    this.animationState6 = 'clicked';
    setTimeout(() => {
      this.router.navigate([rota]); // Substitua '/outra-tela' pela rota que você deseja navegar
    }, 300); // Tempo da animação em milissegundos
  }

  onClick7(rota: string) {
    this.animationState7 = 'clicked';
    setTimeout(() => {
      this.router.navigate([rota]); // Substitua '/outra-tela' pela rota que você deseja navegar
    }, 300); // Tempo da animação em milissegundos
  }

  onClick8(rota: string) {
    this.animationState8 = 'clicked';
    setTimeout(() => {
      this.router.navigate([rota]); // Substitua '/outra-tela' pela rota que você deseja navegar
    }, 300); // Tempo da animação em milissegundos
  }

  onClick9(rota: string) {
    this.animationState9 = 'clicked';
    setTimeout(() => {
      this.router.navigate([rota]); // Substitua '/outra-tela' pela rota que você deseja navegar
    }, 300); // Tempo da animação em milissegundos
  }

  onClick10(rota: string) {
    this.animationState10 = 'clicked';
    setTimeout(() => {
      this.router.navigate([rota]); // Substitua '/outra-tela' pela rota que você deseja navegar
    }, 300); // Tempo da animação em milissegundos
  }

  onClick11(rota: string) {
    this.animationState11 = 'clicked';
    setTimeout(() => {
      this.router.navigate([rota]); // Substitua '/outra-tela' pela rota que você deseja navegar
    }, 300); // Tempo da animação em milissegundos
  }

  onClick12(rota: string) {
    this.animationState12 = 'clicked';
    setTimeout(() => {
      this.router.navigate([rota]); // Substitua '/outra-tela' pela rota que você deseja navegar
    }, 300); // Tempo da animação em milissegundos
  }

  onClick13(rota: string) {
    this.animationState13 = 'clicked';
    setTimeout(() => {
      this.router.navigate([rota]); // Substitua '/outra-tela' pela rota que você deseja navegar
    }, 300); // Tempo da animação em milissegundos
  }

  onClick14(rota: string) {
    this.animationState14 = 'clicked';
    setTimeout(() => {
      this.router.navigate([rota]); // Substitua '/outra-tela' pela rota que você deseja navegar
    }, 300); // Tempo da animação em milissegundos
  }

  onClick15(rota: string) {
    this.animationState15 = 'clicked';
    setTimeout(() => {
      this.router.navigate([rota]); // Substitua '/outra-tela' pela rota que você deseja navegar
    }, 300); // Tempo da animação em milissegundos
  }

  onClick16(rota: string) {
    this.animationState16 = 'clicked';
    setTimeout(() => {
      this.router.navigate([rota]); // Substitua '/outra-tela' pela rota que você deseja navegar
    }, 300); // Tempo da animação em milissegundos
  }
}
