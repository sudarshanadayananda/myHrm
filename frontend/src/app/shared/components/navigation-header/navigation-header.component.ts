import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.scss']
})
export class NavigationHeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  onLogout(){
    this.authService.deleteToken();
    this.router.navigate(['/login']);
  }

}
