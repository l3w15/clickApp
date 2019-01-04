import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  counter: number = 0;
  isDanger: boolean = false;

  clickFunctions() {
    this.incrementCounter()
    this.changeButtonColour()
  }

  incrementCounter() {
    this.counter ++;
  }

  changeButtonColour() {
    this.isDanger = !this.isDanger;
  }

}
