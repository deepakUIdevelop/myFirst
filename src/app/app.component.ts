import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myFirst';
  passingValue: string = '';

  clickMethod(val: any) {
    this.passingValue = val;
    console.log(val);
  }
}
