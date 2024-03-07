import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainCronComponent } from './main-cron/main-cron.component';

const routes: Routes = [
  {
    path: '',
    component: MainCronComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CronometroRoutingModule { }
