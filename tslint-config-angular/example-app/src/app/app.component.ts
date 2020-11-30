import { Component, OnInit } from '@angular/core';
import { Foo } from './some-code/rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    const numItemsInLocalStorage = localStorage.length;
    console.log(numItemsInLocalStorage);

    const divs = document.querySelector('div');

    const foo = new Foo();
  }
}
