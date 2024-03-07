import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainSaludoComponent } from './main-saludo/main-saludo.component';

const routes: Routes = [
  {
    path: '',
    component: MainSaludoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaludoRoutingModule { }
