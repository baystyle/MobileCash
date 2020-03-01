import { Component } from '@angular/core';
import { ActionSheetController, ModalController, AlertController } from '@ionic/angular';
import { InsertCategoryPage } from '../insert-category/insert-category.page';
import { EditCategoryPage } from '../edit-category/edit-category.page';
import { AccountService } from '../account.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private actionCtr:ActionSheetController, private modalCtr:ModalController,private http:HttpClient,private alertCtr:AlertController) {
  }

}
