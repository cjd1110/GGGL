import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchNewsComponent } from './switch-news.component';

describe('SwitchNewsComponent', () => {
  let component: SwitchNewsComponent;
  let fixture: ComponentFixture<SwitchNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
