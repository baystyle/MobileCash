import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'insert-transaction',
    loadChildren: () => import('./insert-transaction/insert-transaction.module').then( m => m.InsertTransactionPageModule)
  },
  {
    path: 'edit-transaction',
    loadChildren: () => import('./edit-transaction/edit-transaction.module').then( m => m.EditTransactionPageModule)
  },
  {
    path: 'detail-transaction',
    loadChildren: () => import('./detail-transaction/detail-transaction.module').then( m => m.DetailTransactionPageModule)
  },
  {
    path: 'edit-category',
    loadChildren: () => import('./edit-category/edit-category.module').then( m => m.EditCategoryPageModule)
  },
  {
    path: 'insert-category',
    loadChildren: () => import('./insert-category/insert-category.module').then( m => m.InsertCategoryPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
