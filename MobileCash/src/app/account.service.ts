import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  public category = []
  public type = []
  public cate = []
  public amount = []
  public date = []
  public note = []
  public balance = 0.00
  constructor() {
    this.category.push("ค่าน้ำดื่ม")
    this.category.push("ค่าอาหาร")
    this.category.push("เงินเดือน")
    this.category.push("ค่าเดินทาง")
    this.type.push("expense")
    this.cate.push("ค่าอาหาร")
    this.amount.push(35.00)
    this.date.push("18/2/2563")
    this.note.push("eiei")
  }

  setCategory(category:String){
    this.category.push(category)
  }

  deleteCategory(cate){
    this.category.forEach((element, index) => {
      if (element == cate) {
        this.category.splice(index,1);
      }
    });
  }

  editCategory(index,cate){
    this.category[index] = cate
  }

}
