import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { AccountService } from '../account.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-insert-category',
  templateUrl: './insert-category.page.html',
  styleUrls: ['./insert-category.page.scss'],
})
export class InsertCategoryPage implements OnInit {

  constructor(private modalCtr:ModalController, private alertCtr:AlertController, private acccount:AccountService,private http:HttpClient) { }
  

  ngOnInit() {}

  async close(){
    await this.modalCtr.dismiss();
  }

  

}
