import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule,MatIconModule, MatButtonModule,
  MatCheckboxModule,MatFormFieldModule,MatRippleModule,MatDatepickerModule,
  MatCardModule,MatToolbarModule,MatExpansionModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { InvoiceComponent } from './inventory/invoice/invoice.component';
import { CheckoutComponent } from './inventory/checkout/checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InvoiceComponent,
    CheckoutComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatIconModule, 
    MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatRippleModule,
  MatDatepickerModule,
  MatCardModule,
  MatToolbarModule,
  MatExpansionModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
