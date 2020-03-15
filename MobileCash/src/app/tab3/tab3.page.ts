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
  private categoryList
  private accountID

  constructor(private actionCtr:ActionSheetController, private modalCtr:ModalController,private http:HttpClient,private alertCtr:AlertController) {
   this.getCategory()
   this.accountID = sessionStorage.getItem('acc_id');
  }

  async insertCategory() {
    const modal = await this.modalCtr.create({
      component: InsertCategoryPage
    });
    return await modal.present().then(_=>{})
  }

  async editCategory(category) {
    const modal = await this.modalCtr.create({
      component: EditCategoryPage,
      componentProps: {
        category:category
      }
    });
    return await modal.present().then(_=>{})
  }

  deleteCategory(category){
    let url = 'http://localhost/Mcash/Category/deleteCategory.php';
    let dataPost = new FormData();
    dataPost.append('cate_id',category.cate_id);
    let data:Observable<any> = this.http.post(url,dataPost);
    data.subscribe(data => {
      console.log('delete success!!');
      
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


  async ActionSheet(category) {
    const actionSheet = await this.actionCtr.create({
      header: 'รายการ',
      buttons: [
        {
          text: 'แก้ไข',
          icon: 'create',
          handler: () => {          
            this.editCategory(category)
          }
        },
        {
        text: 'ลบ',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.conFirm(category)
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

  async conFirm(category) {
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
            this.deleteCategory(category)
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
