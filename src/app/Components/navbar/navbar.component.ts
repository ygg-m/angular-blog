import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  isMobile: boolean = false;
  getIsMobile(): boolean {
    const w = document.documentElement.clientWidth;
    const breakpoint = 860;
    // console.log(w);
    if (w < breakpoint) {
      return true;
    } else {
      return false;
    }
  }

  mobileMenu: boolean = false;
  mobileMenuClick() {
    this.mobileMenu = !this.mobileMenu;
  }

  ngOnInit(): void {
    this.isMobile = this.getIsMobile();
    window.onresize = () => {
      this.isMobile = this.getIsMobile();
    };
  }
}
