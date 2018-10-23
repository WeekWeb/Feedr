import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarMainComponent } from './topbar-main.component';

describe('TopbarMainComponent', () => {
  let component: TopbarMainComponent;
  let fixture: ComponentFixture<TopbarMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopbarMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
