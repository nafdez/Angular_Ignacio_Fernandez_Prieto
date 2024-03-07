import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaludoRoutingModule } from './saludo-routing.module';
import { MainSaludoComponent } from './main-saludo/main-saludo.component';


@NgModule({
  declarations: [
    MainSaludoComponent
  ],
  imports: [
    CommonModule,
    SaludoRoutingModule
  ]
})
export class SaludoModule { }
