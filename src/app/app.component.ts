import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Showtime';
  navbg: any;

  constructor(){}

  ngOnInit(): void {
    
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.scrollY > 0) {
      this.navbg = { 'background-color': '#141414' };
    } else {
      this.navbg = {};
    }
  }
}
