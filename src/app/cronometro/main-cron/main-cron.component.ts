import { Component, ViewChild } from '@angular/core';
import { LapsosComponent } from '../lapsos/lapsos.component';
import { timeInterval } from 'rxjs';

@Component({
  selector: 'app-main-cron',
  templateUrl: './main-cron.component.html',
  styleUrls: ['./main-cron.component.css']
})
export class MainCronComponent {
  timeSeconds: number = 0;
  formattedTime: string = '';
  isStopped: boolean = false;

  // @ViewChild('lapsos') lapsos: Lap
  @ViewChild('lapsos') lapsos: LapsosComponent | undefined;

  onPlayClick() {
    this.isStopped = false;
    this.countTime();
    
  }

  async countTime() {
    while(!this.isStopped) {
      this.timeSeconds++;
      await new Promise(f => setTimeout(f, 1000));
    }
  }

  onPauseClick() {
    this.isStopped = true;
  }

  onRecordClick() {
    this.lapsos?.addLapso(this.timeSeconds + "");
  }
}
