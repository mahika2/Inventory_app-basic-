import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
@Output() listCreated = new EventEmitter();
   
    enteredItem1 = "";
    enteredItem2 = "";
    enteredPrice1 : number;
    enteredPrice2 :number;
    newList="No Content";
   

  onAddList(){
    
    const list = {
      item1: this.enteredItem1,
      price1: this.enteredPrice1,
      item2 :this.enteredItem2,
      price2:this.enteredPrice2,

      };
    this.listCreated.emit(list);//emiting our own event....
       }
  constructor() { }
   ngOnInit() {
  }

}
