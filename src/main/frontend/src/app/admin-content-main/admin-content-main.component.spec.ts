import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContentMainComponent } from './admin-content-main.component';

describe('AdminContentMainComponent', () => {
  let component: AdminContentMainComponent;
  let fixture: ComponentFixture<AdminContentMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminContentMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminContentMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
