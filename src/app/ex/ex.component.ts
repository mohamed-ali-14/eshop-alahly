import { Component, OnInit } from '@angular/core';
import { Montag } from '../montag';
import { MontagatService } from '../montagat.service';
@Component({
  selector: 'app-ex',
  templateUrl: './ex.component.html',
  styleUrls: ['./ex.component.scss']
})
export class ExComponent implements OnInit {
  cartItem:any;

  added:string=" ازاله من السلة"
   constructor(private _MontagatService:MontagatService) { }
ex:Montag[]=this._MontagatService.ex;
   ngOnInit(): void {
     
     
   }
   addToCart(item:any){
     
     this._MontagatService.addItem(item)
    
   }
 
   remove(item:any){
   
     this._MontagatService.removeItem(item)
     
   }
 }
 