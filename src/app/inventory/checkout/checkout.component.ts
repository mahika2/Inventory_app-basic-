import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { AmountService } from 'src/app/amount.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
 
})
export class CheckoutComponent implements OnInit {
 
  @Input() lists=[];
  @Input() final;
  bool:boolean=false;


  Checkout(){
    
    this.bool=true;
    

    
       }
 


 
 

  constructor() { }
  
  ngOnInit() {
  }

}
