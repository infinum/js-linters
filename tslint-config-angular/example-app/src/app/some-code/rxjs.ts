import { Observable, Subject } from 'rxjs';

export class Foo {
  sub1$ = new Subject();
  sub1: Observable<void>;

  public sub2$: Observable<void>;
  public sub3$ = new Subject();

  public x = 0;
}
