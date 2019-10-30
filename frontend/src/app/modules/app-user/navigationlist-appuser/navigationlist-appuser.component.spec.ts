import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationlistAppuserComponent } from './navigationlist-appuser.component';

describe('NavigationlistAppuserComponent', () => {
  let component: NavigationlistAppuserComponent;
  let fixture: ComponentFixture<NavigationlistAppuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationlistAppuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationlistAppuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
