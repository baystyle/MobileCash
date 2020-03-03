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
  @Input() transactionNew
  private categoryList

  
  constructor(private modalCtr:ModalController, private alertCtr:AlertController, private http:HttpClient, private datePipe:DatePipe) {
    this.getCategory()
  }

  ngOnInit() {}

  async close(){
    await this.modalCtr.dismiss();
  }

  calculate(){
    if(this.transactionNew.tst_balance != this.transaction.tst_amount){
      console.log("come in");
      var def = (Number(this.transactionNew.tst_balance) - Number(this.transaction.tst_amount))
      if(this.transaction.tst_type == "รายจ่าย")
      this.transactionNew.tst_balance = def
      else
      this.transactionNew.tst_balance = Number(this.transactionNew.tst_amount) - Number(def)
      // console.log("def => ",def);
      // console.log("moneyNew => ",this.transactionNew.tst_balance);
      // console.log("money => ",this.transaction.tst_amount);
      //console.log("money amount => ",this.transactionNew.tst_balance);
    }
    
      
  }

  editTransaction(){
    this.calculate()
    this.updateAccount()
    let url = 'http://localhost/MCash/Transaction/editTransaction.php';
    let dataPost = new FormData();
    dataPost.append("tst_id",this.transaction.tst_id);
    dataPost.append("tst_balance",this.transactionNew.tst_balance);
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
    dataPost.append("acc_id","1");
    dataPost.append("acc_balance",this.transactionNew.tst_balance);

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
