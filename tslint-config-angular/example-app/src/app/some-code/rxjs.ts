import { Observable, Subject } from 'rxjs';

export class Foo {
  sub$ = new Subject();
  sub: Observable<void>;
}
