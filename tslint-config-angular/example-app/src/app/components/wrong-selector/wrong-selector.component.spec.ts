import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongSelectorComponent } from './wrong-selector.component';

describe('WrongSelectorComponent', () => {
  let component: WrongSelectorComponent;
  let fixture: ComponentFixture<WrongSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrongSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrongSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
