import { Component, OnInit } from '@angular/core';
import { Fund } from '../Models/fund';
import { NavHistoryService } from '../services/nav-history.service';



@Component({
  selector: 'app-nav-history',
  templateUrl: './nav-history.component.html',
  styleUrl: './nav-history.component.scss'
})
export class NavHistoryComponent implements OnInit {

  constructor(private customerService: NavHistoryService) { }
  ngOnInit(): void {
    this.customerService.getCustomersLarge().then(customers => this.customers3 = customers);
  }
  rowGroupMetadata: any;
  customers3: Fund[] = [];
  previousDate: string | undefined;
  currentDate: string | undefined;

  onSort() {
    this.updateRowGroupMetaData();
  }

  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};

    if (this.customers3) {
      for (let i = 0; i < this.customers3.length; i++) {
        const rowData = this.customers3[i];
        this.previousDate = rowData.previousdate;
        this.currentDate = rowData.currentdate;
        const representativeName = rowData?.scheme?.name || '';

        if (i === 0) {
          this.rowGroupMetadata[representativeName] = { index: 0, size: 1 };
        }
        else {
          const previousRowData = this.customers3[i - 1];
          const previousRowGroup = previousRowData?.scheme?.name;
          if (representativeName === previousRowGroup) {
            this.rowGroupMetadata[representativeName].size++;
          }
          else {
            this.rowGroupMetadata[representativeName] = { index: i, size: 1 };
          }
        }
      }
    }
  }
}
