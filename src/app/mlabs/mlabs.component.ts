import { Component, OnInit } from '@angular/core';
import { Montag } from '../montag';
import { MontagatService } from '../montagat.service';

@Component({
  selector: 'app-mlabs',
  templateUrl: './mlabs.component.html',
  styleUrls: ['./mlabs.component.scss'],
})
export class MlabsComponent implements OnInit {
  cartItem: any;

  added: string = ' ازاله من السلة';
  constructor(private _MontagatService: MontagatService) {}
  mlabs: Montag[] = this._MontagatService.mlabs;
  ngOnInit(): void {}
  addToCart(e: any) {
    this.cartItem = e;
    this._MontagatService.addItem(this.cartItem);
  }

  remove(e: any) {
    this.cartItem = e;
    this._MontagatService.removeItem(this.cartItem);
  }
}
