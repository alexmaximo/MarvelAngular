import { Component } from '@angular/core';

import { MarvelService } from './marvel.service';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html'
})
export class MarvelComponent {
    email: string;
    message: string;
    resultado = null;

    constructor(private service: MarvelService) { }

    onSubmit(): void {
        this.service.getAll().then((resultado: JSON[]) => this.resultado = resultado);
        if (this.resultado === null) {
          this.message = 'E-mail não encontrado';
        }else {
          this.message = null;
        }
      }
}
