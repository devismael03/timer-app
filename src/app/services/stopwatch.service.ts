import { Injectable } from '@angular/core';
import { Stopwatch } from '../models/stopwatch';

@Injectable({
  providedIn: 'root'
})
export class StopwatchService {

  public stopwatches: Array<Stopwatch> = null;
  private stopwatchId: number = 0;

    constructor(){
      this.stopwatches = [];
    }
    public add(): void{
      this.stopwatches.push(new Stopwatch(this.stopwatchId++));
    }
    public getAll(): Array<Stopwatch>{
      return Array.from(this.stopwatches);
    }
    public remove(id: number){
      this.stopwatches = this.stopwatches.filter(s => s.id !== id);
    }

}
