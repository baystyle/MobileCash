import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertCategoryPage } from './insert-category.page';

const routes: Routes = [
  {
    path: '',
    component: InsertCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertCategoryPageRoutingModule {}
