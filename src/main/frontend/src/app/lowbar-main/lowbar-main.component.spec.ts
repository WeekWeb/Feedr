import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowbarMainComponent } from './lowbar-main.component';

describe('LowbarMainComponent', () => {
  let component: LowbarMainComponent;
  let fixture: ComponentFixture<LowbarMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowbarMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowbarMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
