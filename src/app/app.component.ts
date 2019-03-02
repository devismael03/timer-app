import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'timer-app';
  isListView = false;
  
  public changeState(): void{
    this.isListView = !this.isListView;
  }
}
