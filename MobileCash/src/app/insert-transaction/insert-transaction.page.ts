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

  private accountID
  private categoryList
  private category
  private balance
  private type
  private amount
  private date
  private note

  constructor(private modalCtr:ModalController, private alertCtr:AlertController, private http:HttpClient, private datePipe:DatePipe) { 
    this.note = ""
    this.getCategory()
    this.getAccount()
  }

  ngOnInit() {}

  async close(){
    await this.modalCtr.dismiss();
  }

  calculate(){
    if(this.type == "รายจ่าย"){
      
      this.balance = Number(this.balance) - Number(this.amount)
    }
    else{
      this.balance = Number(this.balance) + Number(this.amount)
    }
    sessionStorage.setItem('acc_balance',this.balance)
      
  }

  insertTransaction(){
    this.calculate()
    this.updateAccount()
    
    let url = 'http://localhost/MCash/Transaction/insertTransaction.php';
    let dataPost = new FormData();
    dataPost.append("tst_balance",this.balance);
    dataPost.append("tst_type",this.type);
    dataPost.append("tst_cate_id",this.category);
    dataPost.append("tst_amount",this.amount);
    dataPost.append("tst_date",this.datePipe.transform(this.date,'yyy-MM-dd'));
    dataPost.append("tst_note",this.note);
    dataPost.append("tst_acc_id",this.accountID);

    let data:Observable<any> = this.http.post(url,dataPost);
    data.subscribe(data => {
      console.log("insert success!!!");
    }) 
  }

  getCategory(){
    let url = 'http://localhost/MCash/Category/getCategory.php';
    let data:Observable<any> = this.http.post(url,'');
    data.subscribe(data => {
      this.categoryList = data
      console.log(this.categoryList);
    })    
  }

  getAccount(){
    this.accountID = sessionStorage.getItem('acc_id')
    this.balance = sessionStorage.getItem('acc_balance')    
  }

  updateAccount(){
    let url = 'http://localhost/MCash/Account/updateAccount.php';
    let dataPost = new FormData();
    dataPost.append("acc_id",this.accountID);
    dataPost.append("acc_balance",this.balance);

    let data:Observable<any> = this.http.post(url,dataPost);
    data.subscribe(data => {
      console.log("update account success!!!");
    }) 
  }

  async conFirm() {
    const alert = await this.alertCtr.create({
      header: 'Comfirm!!',
      message: 'ต้องการบันทึกข้อมูลหรือไม่',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'ยืนยัน',
          handler: () => {
            this.insertTransaction()
            this.successAlert()
            this.close()
          }
        }
      ]
    });

    await alert.present();
  }

  async successAlert() {
    const alert = await this.alertCtr.create({
      header: 'Completed!!',
      subHeader: 'บันทึกข้อมูลสำเร็จ',
      message: '',
      buttons: ['OK']
    });

    await alert.present();
  }

}
