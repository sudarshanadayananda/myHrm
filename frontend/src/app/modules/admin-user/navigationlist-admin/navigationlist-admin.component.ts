import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigationlist-admin',
  templateUrl: './navigationlist-admin.component.html',
  styleUrls: ['./navigationlist-admin.component.scss']
})
export class NavigationlistAdminComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
  
}
