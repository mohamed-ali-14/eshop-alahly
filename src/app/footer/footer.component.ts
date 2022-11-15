import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
logo:string="../assets/ALAHLY-Online-Store-Logo-White.png";
  constructor() { }

  ngOnInit(): void {
  }

}
