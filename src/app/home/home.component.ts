import { Component, OnInit } from '@angular/core';
import { Montag } from '../montag';
import { MontagatService } from '../montagat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  
})
export class HomeComponent implements OnInit {
cartItem:any;

 added:string=" ازاله من السلة"
  constructor(private _MontagatService:MontagatService) { }
all:Montag[]=this._MontagatService.all;
  ngOnInit(): void {
    
    
  }
  addToCart(e:any){
    this.cartItem=e
    this._MontagatService.addItem(this.cartItem)
    this.cartItem.dis=true
  }

  remove(e:any){
    this.cartItem=e
    this._MontagatService.removeItem(this.cartItem)
    this.cartItem.dis=false
  }
}
