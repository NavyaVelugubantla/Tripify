import { Component, OnInit } from '@angular/core';
import { EmartService } from '../../emart.service';


@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {
  allBills: any;
  currentBuyer: any;
  showBill: boolean;
  currentUser: any;
  mileage: number;
  constructor(protected emartService: EmartService) {
   }
  ngOnInit(): void {
    this.currentBuyer=  JSON.parse(localStorage.getItem('i1'));//retrieving current buyer details from local storage  
    console.log(" bill list i1: " + JSON.stringify(this.currentBuyer));
    this.allBills = [];
    this.allBills =  JSON.parse(localStorage.getItem('i2'));//retrieving all bills from local storage
    console.log(" bill list i2: " + JSON.stringify(this.allBills));
    if (this.allBills.length == 0) {
      this.showBill = false;
    }
    else {
      this.showBill = true;
    }

    this.emartService.getBuyer()
      .subscribe(
        (response) => {
          this.currentUser = response;
        }
      );

  }
}
