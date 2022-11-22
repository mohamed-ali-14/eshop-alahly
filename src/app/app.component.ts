import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, NavigationStart } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alahly';
  nav:any;
  name:string=""
  constructor( private router: Router,){}
  ngOnInit():void{ this.router.events.subscribe(e => {
      if (e instanceof NavigationStart) {
        this.name = e.url
        if (this.name == "/mlabs" ||this.name == "/ex" ||this.name == "/shonat" ||this.name=="/cart" ){
          this.nav = false
         
          localStorage.setItem("nav",this.nav)
  
        } else {
          this.nav = true
         
          localStorage.setItem("nav",this.nav)
        }
      }
    });}
 
}

