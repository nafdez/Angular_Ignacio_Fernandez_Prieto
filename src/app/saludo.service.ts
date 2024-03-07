import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaludoService {

  timesVisited: number = 0;

  constructor() { }

  public visit() {
    this.timesVisited++;
  }

  public getTimesVisited(): number {
    return this.timesVisited;
  }
}
