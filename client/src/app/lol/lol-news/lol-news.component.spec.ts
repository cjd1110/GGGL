import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LolNewsComponent } from './lol-news.component';

describe('LolNewsComponent', () => {
  let component: LolNewsComponent;
  let fixture: ComponentFixture<LolNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LolNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LolNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
