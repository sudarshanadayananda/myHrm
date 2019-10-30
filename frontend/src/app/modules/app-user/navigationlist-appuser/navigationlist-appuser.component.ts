import { Component, OnInit,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigationlist-appuser',
  templateUrl: './navigationlist-appuser.component.html',
  styleUrls: ['./navigationlist-appuser.component.scss']
})
export class NavigationlistAppuserComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
  
}
