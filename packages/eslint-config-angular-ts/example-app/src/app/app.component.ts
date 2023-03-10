import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'example-app'; // should throw the "missing accessibility modifier" error

	public exposedSubject$ = new Subject<void>(); // should throw the no-exposed-subjects error
}
