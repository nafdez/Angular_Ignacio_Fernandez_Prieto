import { Component, Input } from '@angular/core';

@Component({
  selector: 'lapsos',
  templateUrl: './lapsos.component.html',
  styleUrls: ['./lapsos.component.css']
})
export class LapsosComponent {

  lapsos: string[] = [];

  addLapso(lapso: string) {
    this.lapsos.push(lapso);
  }
  
}
