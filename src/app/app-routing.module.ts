import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CronometroModule } from './cronometro/cronometro.module';
import { SaludoModule } from './saludo/saludo.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cronometro',
    loadChildren: () =>
      import('./cronometro/cronometro.module').then(
        (m): typeof CronometroModule => m.CronometroModule
      ),
  },
  {
    path: 'saludo',
    loadChildren: () =>
      import('./saludo/saludo.module').then(
        (m): typeof SaludoModule => m.SaludoModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
