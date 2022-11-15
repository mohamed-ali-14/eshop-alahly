import { EventEmitter, Injectable } from '@angular/core';
import { Montag } from './montag';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MontagatService {
  private price = new BehaviorSubject<number>(0);
  priceO = this.price.asObservable();
  private count = new BehaviorSubject<any>(0);
  countO = this.count.asObservable();
  private carts = new BehaviorSubject<Montag[]>([]);
  cartO = this.carts.asObservable();
  shont: Montag[] = [
    {
      name: 'شنطة سفر',
      photo: '../assets/shonat/0.jpg',
      price: 630,
      quantity: 0,
    },
    {
      name: 'شنطة حبل رياضية',
      photo: '../assets/shonat/1.jpg',
      price: 182,
      quantity: 0,
    },
    {
      name: 'شنطة لاب توب 15 بوصة  ',
      photo: '../assets/shonat/2.png',
      price: 380,
      quantity: 0,
    },
    {
      name: 'شنطة ظهر',
      photo: '../assets/shonat/3.jpg',
      price: 528,
      quantity: 0,
    },
    {
      name: 'شنطة ظهر',
      photo: '../assets/shonat/4.jpg',
      price: 883,
      quantity: 0,
    },
    {
      name: 'شنطة كتف رجالي',
      photo: '../assets/shonat/5.jpg',
      price: 820,
      quantity: 0,
    },
    {
      name: 'شنطة جيم',
      photo: '../assets/shonat/6.jpg',
      price: 630,
      quantity: 0,
    },
    {
      name: 'شنطة لاب توب 13 بوصة',
      photo: '../assets/shonat/7.jpg',
      price: 341,
      quantity: 0,
    },
    {
      name: 'شنطة سفر',
      photo: '../assets/shonat/8.jpg',
      price: 630,
      quantity: 0,
    },
    {
      name: 'شنطة ظهر',
      photo: '../assets/shonat/9.jpg',
      price: 883,
      quantity: 0,
    },
    {
      name: 'شنطة يد جلد',
      photo: '../assets/shonat/10.jpg',
      price: 630,
      quantity: 0,
    },
    {
      name: 'شنطة يد كتان',
      photo: '../assets/shonat/11.jpg',
      price: 502,
      quantity: 0,
    },
    {
      name: 'شنطة سفر جلد',
      photo: '../assets/shonat/12.jpg',
      price: 502,
      quantity: 0,
    },
    {
      name: 'شنطة يد جلد',
      photo: '../assets/shonat/13.jpg',
      price: 756,
      quantity: 0,
    },
  ];
  ex: Montag[] = [
    {
      name: 'إستيكر نسر الأهلي',
      photo: '../assets/ex/0.jpg',
      price: 39,
      quantity: 0,
    },
    {
      name: 'درع أكليريك',
      photo: '../assets/ex/1.png',
      price: 635,
      quantity: 0,
    },
    { name: 'قلم جاف', photo: '../assets/ex/2.jpg', price: 47, quantity: 0 },
    {
      name: 'ساعة حائط أكليريك',
      photo: '../assets/ex/3.png',
      price: 528,
      quantity: 0,
    },
    {
      name: 'ساعة حائط (بديل رخام)',
      photo: '../assets/ex/4.png',
      price: 883,
      quantity: 0,
    },
    {
      name: 'طقم ستاند موبايل خشب مجسم و قلم',
      photo: '../assets/ex/5.png',
      price: 193,
      quantity: 0,
    },
    { name: 'ماوس باد', photo: '../assets/ex/6.jpg', price: 205, quantity: 0 },
    {
      name: 'استاند موبايل "الشعار"',
      photo: '../assets/ex/7.png',
      price: 55,
      quantity: 0,
    },
    {
      name: 'ميدالية عربية "الشعار"',
      photo: '../assets/ex/8.jpg',
      price: 379,
      quantity: 0,
    },
    {
      name: 'إستيكر الأهلي عندي بالحياة',
      photo: '../assets/ex/9.jpg',
      price: 883,
      quantity: 0,
    },
    { name: 'درع خشب', photo: '../assets/ex/10.jpg', price: 630, quantity: 0 },
    {
      name: 'برواز "اعظم نادي في الكون"',
      photo: '../assets/ex/11.jpg',
      price: 129,
      quantity: 0,
    },
    {
      name: 'برواز حائط الأهلي حياتنا',
      photo: '../assets/ex/12.jpg',
      price: 182,
      quantity: 0,
    },
    {
      name: 'صب بلوتوث',
      photo: '../assets/ex/13.jpg',
      price: 945,
      quantity: 0,
    },
    {
      name: 'علم النادي الأهلي (Glory In Numbers)',
      photo: '../assets/ex/14.jpg',
      price: 228,
      quantity: 0,
    },
    {
      name: 'فلاش ميمورى (مضيئة)',
      photo: '../assets/ex/15.png',
      price: 341,
      quantity: 0,
    },
    {
      name: 'كوستر "احنا ليك يا أهلي و انت جوا عنينا"',
      photo: '../assets/ex/16.jpg',
      price: 25,
      quantity: 0,
    },
    {
      name: 'مج "أعظم نادي في الكون"',
      photo: '../assets/ex/17.jpg',
      price: 129,
      quantity: 0,
    },
    { name: 'مج حراري', photo: '../assets/ex/18.jpg', price: 604, quantity: 0 },
    {
      name: 'مج حراري "Al Ahly 1907"',
      photo: '../assets/ex/19.jpg',
      price: 295,
      quantity: 0,
    },
  ];
  mlabs: Montag[] = [
    {
      name: 'تيشيرت (رقبة Round )',
      photo: '../assets/mlabs/1.jpg',
      price: 303,
      quantity: 0,
    },
    {
      name: 'تيشرت الجمهور الرسمي - لوجو تطريز',
      photo: '../assets/mlabs/0.jpg',
      price: 225,
      quantity: 0,
    },
    {
      name: 'تيشرت الجمهور الرسمي (للأطفال)',
      photo: '../assets/mlabs/2.png',
      price: 215,
      quantity: 0,
    },

    {
      name: 'تيشيرت بولو',
      photo: '../assets/mlabs/3.jpg',
      price: 334,
      quantity: 0,
    },
    {
      name: 'تيشيرت بولو',
      photo: '../assets/mlabs/4.jpg',
      price: 394,
      quantity: 0,
    },
    {
      name: 'تيشيرت (رقبة Round )',
      photo: '../assets/mlabs/5.jpg',
      price: 303,
      quantity: 0,
    },
    {
      name: 'تيشيرت بولو',
      photo: '../assets/mlabs/6.jpg',
      price: 394,
      quantity: 0,
    },
    {
      name: 'تيشيرت بولو',
      photo: '../assets/mlabs/7.jpg',
      price: 341,
      quantity: 0,
    },
    {
      name: 'تيشيرت بولو',
      photo: '../assets/mlabs/8.jpg',
      price: 334,
      quantity: 0,
    },
    {
      name: 'تيشيرت بولو',
      photo: '../assets/mlabs/9.jpg',
      price: 394,
      quantity: 0,
    },
    {
      name: 'تيشيرت بولو',
      photo: '../assets/mlabs/10.jpg',
      price: 334,
      quantity: 0,
    },
    {
      name: 'سويت شيرتالأهلي حياتنا',
      photo: '../assets/mlabs/11.jpg',
      price: 635,
      quantity: 0,
    },
  ];
  all: Montag[] = [
    {
      name: 'تيشرت الجمهور الرسمي - لوجو تطريز',
      photo: '../assets/mlabs/0.jpg',
      price: 225,
      quantity: 0,
    },
    {
      name: 'تيشرت الجمهور الرسمي (للأطفال)',
      photo: '../assets/mlabs/2.png',
      price: 215,
      quantity: 0,
    },
    {
      name: 'طقم ستاند موبايل خشب مجسم و قلم',
      photo: '../assets/ex/5.png',
      price: 193,
      quantity: 0,
    },
    {
      name: 'كوستر "احنا ليك يا أهلي و انت جوا عنينا"',
      photo: '../assets/ex/16.jpg',
      price: 25,
      quantity: 0,
    },
    {
      name: 'برواز "اعظم نادي في الكون"',
      photo: '../assets/ex/11.jpg',
      price: 129,
      quantity: 0,
    },
    {
      name: 'إستيكر نسر الأهلي',
      photo: '../assets/ex/0.jpg',
      price: 39,
      quantity: 0,
    },
    {
      name: 'درع أكليريك',
      photo: '../assets/ex/1.png',
      price: 635,
      quantity: 0,
    },
    {
      name: 'شنطة سفر',
      photo: '../assets/shonat/0.jpg',
      price: 630,
      quantity: 0,
    },
    {
      name: 'شنطة حبل رياضية',
      photo: '../assets/shonat/1.jpg',
      price: 182,
      quantity: 0,
    },
    {
      name: 'شنطة لاب توب 15 بوصة  ',
      photo: '../assets/shonat/2.png',
      price: 380,
      quantity: 0,
    },
  ];
  countnum: number = 0;
  x: number = 0;
  y: number = 0;
  cart: Montag[] = [];
  constructor() {}

  addItem(obj: Montag) {
    obj.dis = true;
    ++obj.quantity;
    if (obj.quantity == 1) {
      this.cart.push(obj);
    }

    this.x = this.x + obj.price;
    this.countnum++;
    this.carts.next(this.cart);
    this.price.next(this.x);
    this.count.next(this.countnum);
    // localStorage.setItem('cart', JSON.stringify(this.carts.value));
    // localStorage.setItem('price', JSON.stringify(this.price.value));
    // localStorage.setItem('count', JSON.stringify(this.count.value));
  }

  removeItem(obj: Montag) {
    --obj.quantity;
    if (obj.quantity == 0) {
      let index = this.cart.indexOf(obj);
      this.cart.splice(index, 1);
      obj.dis = false;
    } else {
      obj.dis = true;
    }

    this.y = obj.price;
    this.x -= this.y;
    this.countnum--;
    this.price.next(this.x);
    this.carts.next(this.cart);
    this.count.next(this.countnum);
    // localStorage.setItem('cart', JSON.stringify(this.carts.value));
    // localStorage.setItem('price', JSON.stringify(this.price.value));
    // localStorage.setItem('count', JSON.stringify(this.count.value));
  }

  // getprice(obj:Montag) {
  //   this.x =this.x+ obj.price
  //   this.price.next(this.x);

  // }

  // removeprice(obj: Montag) {
  //   this.y = obj.price;
  //   this.x -= this.y;

  // }
}
