import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertCategoryPageRoutingModule } from './insert-category-routing.module';

import { InsertCategoryPage } from './insert-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertCategoryPageRoutingModule
  ],
  declarations: [InsertCategoryPage]
})
export class InsertCategoryPageModule {}
