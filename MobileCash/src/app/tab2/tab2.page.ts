import { Component } from '@angular/core';
import { ActionSheetController, ModalController, AlertController } from '@ionic/angular';
import { InsertTransactionPage } from '../insert-transaction/insert-transaction.page';
import { EditTransactionPage } from '../edit-transaction/edit-transaction.page';
import { DetailTransactionPage } from '../detail-transaction/detail-transaction.page';
import { AccountService } from '../account.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  private transactionList
  private accountID
  private categoryList
  private category
  private balance
  private type
  private amount
  private date
  private note

  constructor(private actionCtr:ActionSheetController,private modalCtr:ModalController, private http:HttpClient, private alertCtr:AlertController, private datePipe:DatePipe) {
    this.get_list_transaction()
    this.accountID = sessionStorage.getItem('acc_id');
  }

  async insertTransaction() {
    console.log("addTransaction clicked")
    const modal = await this.modalCtr.create({
      component: InsertTransactionPage
    });
    return await modal.present().then(_=>{})
  }

  async editTransaction(transaction) {
    const modal = await this.modalCtr.create({
      component: EditTransactionPage,
      componentProps: {
        transaction:transaction,
        amount:transaction.tst_amount
      }
    });
    return await modal.present().then(_=>{})
  }

  // 60160203 นายอธิคม วงศ์วาร
  deleteTransaction(transaction) {
    this.type = transaction.tst_type
    this.balance = transaction.tst_balance
    this.amount = transaction.tst_amount
    this.calculate()
    this.updateAccount()
    sessionStorage.setItem("acc_balance",this.balance)
    let url = 'http://localhost/MCash/Transaction/deleteTransaction.php';
    let dataPost = new FormData();
    dataPost.append('tst_id',transaction.tst_id);
    let data:Observable<any> = this.http.post(url,dataPost);
    data.subscribe(data => {
      console.log('delete success!!');
      
    })     
  }

  updateAccount(){
    let url = 'http://localhost/MCash/Account/updateAccount.php';
    let dataPost = new FormData();
    dataPost.append("acc_id",sessionStorage.getItem('acc_id'));
    dataPost.append("acc_balance",this.balance);

    let data:Observable<any> = this.http.post(url,dataPost);
    data.subscribe(data => {
      console.log("insert success!!!");
    }) 
  }

  calculate(){
    if(this.type == "รายจ่าย"){
      
      this.balance = Number(this.balance) + Number(this.amount)
    }
    else{
      this.balance = Number(this.balance) - Number(this.amount)
    }
    console.log("balance => ",this.balance);
    
    //sessionStorage.setItem('acc_balance',this.balance)
      
  }

  async detailTransaction(transaction) {
    const modal = await this.modalCtr.create({
      component: DetailTransactionPage,
      componentProps: {
        transaction:transaction
      }
    });
    return await modal.present().then(_=>{})
  }

  get_list_transaction(){
    let url = 'http://localhost/MCash/Transaction/getTransaction.php';
    let data:Observable<any> = this.http.post(url,'');
    data.subscribe(data => {
      this.transactionList = data
      console.log(this.transactionList);  
    })
  }
  
  async ActionSheet(transaction) {
    const actionSheet = await this.actionCtr.create({
      header: 'รายการ',
      buttons: [
        {
          text: 'รายละเอียด',
          icon: 'information-circle',
          handler: () => {          
            this.detailTransaction(transaction);
          }
        },
        {
          text: 'แก้ไข',
          icon: 'create',
          handler: () => {          
            this.editTransaction(transaction);
          }
        },
        {
        text: 'ลบ',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.conFirm(transaction)
        }
      },{
        text: 'ยกเลิก',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async conFirm(transaction) {
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
            this.deleteTransaction(transaction)
            this.successAlert()
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
