import { Component, OnInit } from '@angular/core';
import { Montag } from '../montag';
import { MontagatService } from '../montagat.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartDis: Montag[] = [];
  
  cartItem: any;
  price: number = 0;
  added: string = ' ازاله من السلة';

  constructor(private _MontagatService: MontagatService) {
    
  }

  ngOnInit(): void {
    
    
      this._MontagatService.cartO.subscribe((data) => {
        this.cartDis = data;
      });

      this._MontagatService.priceO.subscribe((data) => {
        this.price = data;
      });
    
  }
  remove(item: any) {
    
    this._MontagatService.removeItem(item);
  }
 add(item: any) {
    
    this._MontagatService.addItem(item);
  }
}
