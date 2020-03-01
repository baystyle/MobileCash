import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { InsertCategoryPage } from '../insert-category/insert-category.page';
import { EditTransactionPage } from '../edit-transaction/edit-transaction.page';
import { EditCategoryPage } from '../edit-category/edit-category.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  declarations: [Tab3Page,InsertCategoryPage,EditCategoryPage],
  entryComponents:[InsertCategoryPage,EditCategoryPage]
})
export class Tab3PageModule {}
