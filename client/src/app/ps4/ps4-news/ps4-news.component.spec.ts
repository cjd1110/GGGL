import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ps4NewsComponent } from './ps4-news.component';

describe('Ps4NewsComponent', () => {
  let component: Ps4NewsComponent;
  let fixture: ComponentFixture<Ps4NewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ps4NewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ps4NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
