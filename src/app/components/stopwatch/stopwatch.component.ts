import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent{

  public milliseconds:number;
  public seconds:number;
  public minutes:number;
  public hours:number;
  public stopped: boolean;
  public isInListView: boolean;
  public t = null;
  constructor(){
    this.milliseconds = 0;
    this.seconds = 0;
    this.hours = 0;
    this.minutes = 0;
    this.stopped = false;
  }

  public startTimer(): void{

    if(this.t === null || this.stopped){
      this.t = setInterval(() => {
        this.milliseconds+=10;
        if(this.milliseconds >= 1000){
          this.milliseconds = 0;
          this.seconds++;
          if(this.seconds >= 60){
            this.seconds = 0;
            this.minutes++;
            if(this.minutes >= 60){
              this.minutes = 0;
              this.hours++;
            }
          }
        }
      },10);
    }
    
  }
  
  public stopTimer(): void{
    clearInterval(this.t);
    this.stopped = true;
  }
  
  public resetTimer(): void{
    this.milliseconds = 0;
    this.seconds = 0;
    this.hours = 0;
    this.minutes = 0;
    this.stopped = false;
    clearInterval(this.t);
    this.t = null;
  }
}
