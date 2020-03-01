import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertTransactionPageRoutingModule } from './insert-transaction-routing.module';

import { InsertTransactionPage } from './insert-transaction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertTransactionPageRoutingModule
  ],
  declarations: [InsertTransactionPage]
})
export class InsertTransactionPageModule {}
