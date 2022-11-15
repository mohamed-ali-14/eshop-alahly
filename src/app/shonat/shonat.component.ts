import { Component, OnInit } from '@angular/core';
import { Montag } from '../montag';
import { MontagatService } from '../montagat.service';
@Component({
  selector: 'app-shonat',
  templateUrl: './shonat.component.html',
  styleUrls: ['./shonat.component.scss']
})
export class ShonatComponent implements OnInit {
  cartItem:any;

  added:string=" ازاله من السلة"
   constructor(private _MontagatService:MontagatService) { }
 shont:Montag[]=this._MontagatService.shont;
   ngOnInit(): void {
     
     
   }
   addToCart(item:any){
     
     this._MontagatService.addItem(item)
    
   }
 
   remove(item:any){
    
     this._MontagatService.removeItem(item)
     
   }
 }
 