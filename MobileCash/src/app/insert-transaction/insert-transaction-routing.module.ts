import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertTransactionPage } from './insert-transaction.page';

const routes: Routes = [
  {
    path: '',
    component: InsertTransactionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertTransactionPageRoutingModule {}
