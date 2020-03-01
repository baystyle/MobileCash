import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { InsertTransactionPage } from '../insert-transaction/insert-transaction.page';
import { EditTransactionPage } from '../edit-transaction/edit-transaction.page';
import { DetailTransactionPage } from '../detail-transaction/detail-transaction.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page,InsertTransactionPage,EditTransactionPage,DetailTransactionPage],
  entryComponents:[InsertTransactionPage,EditTransactionPage,DetailTransactionPage]
})
export class Tab2PageModule {}
