import { Component } from '@angular/core';
import { StopwatchService } from './services/stopwatch.service';
import { Stopwatch } from './models/stopwatch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'timer-app';
  public isListView = false;
  public stopwatches: Array<Stopwatch> = null;
  public service: StopwatchService = null;
  constructor(service: StopwatchService){
    this.service = service; 

  }
  
  public changeState(): void{
    this.isListView = !this.isListView;
  }
  
  public addToList(): void{
    this.service.add();
    this.stopwatches = this.service.getAll();
    console.log(this.stopwatches);
  }

  public remove(id: number): void{
    this.service.remove(id);
    this.stopwatches = this.service.getAll();
  }

}
