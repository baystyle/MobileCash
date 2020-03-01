import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { AccountService } from '../account.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-insert-transaction',
  templateUrl: './insert-transaction.page.html',
  styleUrls: ['./insert-transaction.page.scss'],
})
export class InsertTransactionPage implements OnInit {

  constructor(private modalCtr:ModalController, private alertCtr:AlertController, private http:HttpClient, private datePipe:DatePipe) { 
  }

  ngOnInit() {}

  async close(){
    await this.modalCtr.dismiss();
  }

}
