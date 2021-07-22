import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // example linter error follows
  title = 'my-app';

  // example linter error follow
  obs: Observable<void>;

  constructor(
    // example linter error follow
    private router: Router,
  ) {}

  // example linter error follow
  ngOnInit(): {}
}
