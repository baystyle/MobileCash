import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { AccountService } from '../account.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.page.html',
  styleUrls: ['./edit-category.page.scss'],
})
export class EditCategoryPage implements OnInit {

  constructor(private modalCtr:ModalController, private alertCtr:AlertController, private account:AccountService,private http:HttpClient) { }
  ngOnInit() {}

  async close(){
    await this.modalCtr.dismiss();
  }

}
