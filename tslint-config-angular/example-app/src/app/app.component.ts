import { Component, OnInit } from '@angular/core';

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
  }
}
