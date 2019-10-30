import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationlistAdminComponent } from './navigationlist-admin.component';

describe('NavigationlistAdminComponent', () => {
  let component: NavigationlistAdminComponent;
  let fixture: ComponentFixture<NavigationlistAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationlistAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationlistAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
