import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AmountService {
  totalBill:number;
  getBill(price1 : number,price2:number){
    this.totalBill=price1+price2;
    return this.totalBill;
  }
  constructor() { }
}
