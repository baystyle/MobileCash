import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-transaction',
  templateUrl: './edit-transaction.page.html',
  styleUrls: ['./edit-transaction.page.scss'],
})
export class EditTransactionPage implements OnInit {
  
  @Input() transaction
  @Input() amount
  private categoryList
  private accountID
  private balance

  
  constructor(private modalCtr:ModalController, private alertCtr:AlertController, private http:HttpClient, private datePipe:DatePipe) {
    this.getCategory()
    this.accountID = sessionStorage.getItem('acc_id')
    this.balance = sessionStorage.getItem('acc_balance')
  }

  ngOnInit() {}

  async close(){
    await this.modalCtr.dismiss();
  }

  calculate(){
    if(this.amount != this.transaction.tst_amount){
      console.log("come in");
      var balance = sessionStorage.getItem('acc_balance')
      var def = (Number(this.amount) - Number(this.transaction.tst_amount))
      if(this.transaction.tst_type == "รายจ่าย")
        this.balance = Number(balance) + def
      else
        this.balance = Number(balance) - def
      console.log("def => ",def);
      console.log("moneyNew => ",this.balance);
      sessionStorage.setItem('acc_balance',this.balance)
      // console.log("money => ",this.transaction.tst_amount);
      //console.log("money amount => ",this.transactionNew.tst_balance);
    }else
      console.log("not change");
      
    
      
  }

  editTransaction(){
    this.calculate()
    this.updateAccount()
    let url = 'http://localhost/MCash/Transaction/editTransaction.php';
    let dataPost = new FormData();
    dataPost.append("tst_id",this.transaction.tst_id);
    dataPost.append("tst_balance",this.balance);
    dataPost.append("tst_type",this.transaction.tst_type);
    dataPost.append("tst_cate_id",this.transaction.tst_cate_id);
    dataPost.append("tst_amount",this.transaction.tst_amount);
    dataPost.append("tst_date",this.transaction.tst_date);
    dataPost.append("tst_note",this.transaction.tst_note);

    let data:Observable<any> = this.http.post(url,dataPost);
    data.subscribe(data => {
      console.log("insert success!!!");
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

  getCategory(){
    let url = 'http://localhost/MCash/Category/getCategory.php';
    let data:Observable<any> = this.http.post(url,'');
    data.subscribe(data => {
      this.categoryList = data
      console.log(this.categoryList);
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
            this.editTransaction()
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
