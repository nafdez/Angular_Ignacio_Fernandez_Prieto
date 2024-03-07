import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SaludoService } from 'src/app/saludo.service';

@Component({
  selector: 'app-main-saludo',
  templateUrl: './main-saludo.component.html',
  styles: [
  ]
})
export class MainSaludoComponent {
  saludo: string = '';

  constructor(private route: ActivatedRoute, private saludoService: SaludoService) {
    saludoService.visit()
    if (saludoService.getTimesVisited() == 1) {
      this.saludo = 'Hola, qué tal estás?';
    } else {
      this.saludo = 'Bienvenido de vuelta';
    }
  }
}
