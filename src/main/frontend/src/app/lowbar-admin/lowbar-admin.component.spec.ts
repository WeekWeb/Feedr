import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowbarAdminComponent } from './lowbar-admin.component';

describe('LowbarAdminComponent', () => {
  let component: LowbarAdminComponent;
  let fixture: ComponentFixture<LowbarAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowbarAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowbarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
