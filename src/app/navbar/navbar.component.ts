import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { MontagatService } from '../montagat.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  logo: string = '../assets/footer-logo.png';
  panar: string = '../assets/AlAhly_website_banner_22020_03-1-large.png';
  num: any = 0;
  offset: number = 1;
  display: any = false;
  nav:any =false;
  name:string=""
  constructor(private _MontagatService: MontagatService  , private router: Router,) {
    if (localStorage.getItem('display') != null) {
      var dis: any = localStorage.getItem('display');
      this.display = /true/i.test(dis);
    }
    if(localStorage.getItem("nav") != null ){
      
      var bar :any = localStorage.getItem("nav")
      this.nav= (/true/i).test(bar) 
    }
  }

  ngOnInit(): void {
    this._MontagatService.countO.subscribe((data) => {
      this.num = data;
    });
    window.addEventListener('resize', () => {
      this.offset = window.innerWidth;

      if (this.offset < 768) {
        this.display = true;
        localStorage.setItem('display', this.display);
      } else {
        this.display = false;
        localStorage.setItem('display', this.display);
      }
    });
    this.router.events.subscribe(e => {
      if (e instanceof NavigationStart) {
        this.name = e.url
        if (this.name == "/mlabs" ||this.name == "/ex" ||this.name == "/shonat"  ){
          this.nav = false
         
          localStorage.setItem("nav",this.nav)
  
        } else {
          this.nav = true
         
          localStorage.setItem("nav",this.nav)
        }
      }
    });


  }
}
