import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

export interface Country {
  name?: string;
  code?: string;
}

export interface Representative {
  name?: string;
  image?: string;
}

export interface Customer {
  id?: number;
  name?: string;
  country?: Country;
  company?: string;
  date?: string;
  status?: string;
  activity?: number;
  representative?: Representative;
}


@Component({
  selector: 'app-nav-history',
  templateUrl: './nav-history.component.html',
  styleUrl: './nav-history.component.scss'
})
export class NavHistoryComponent implements OnInit {

  constructor(private customerService: CustomerService){}
  ngOnInit(): void {
    this.customerService.getCustomersLarge().then(customers => this.customers3 = customers);
  }
  rowGroupMetadata: any;
  customers3: Customer[] = [];


  onSort() {
    this.updateRowGroupMetaData();
}

updateRowGroupMetaData() {
  this.rowGroupMetadata = {};

  if (this.customers3) {
      for (let i = 0; i < this.customers3.length; i++) {
          const rowData = this.customers3[i];
          const representativeName = rowData?.representative?.name || '';

          if (i === 0) {
              this.rowGroupMetadata[representativeName] = { index: 0, size: 1 };
          }
          else {
              const previousRowData = this.customers3[i - 1];
              const previousRowGroup = previousRowData?.representative?.name;
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
