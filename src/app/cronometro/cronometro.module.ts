import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CronometroRoutingModule } from './cronometro-routing.module';
import { MainCronComponent } from './main-cron/main-cron.component';
import { LapsosComponent } from './lapsos/lapsos.component';


@NgModule({
  declarations: [
    MainCronComponent,
    LapsosComponent
  ],
  imports: [
    CommonModule,
    CronometroRoutingModule
  ]
})
export class CronometroModule { }
