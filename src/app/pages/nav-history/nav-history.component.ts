import { Component, OnInit } from '@angular/core';
import { Fund } from '../Models/fund';
import { NavHistoryService } from '../services/nav-history.service';
import { Table } from 'primeng/table';



@Component({
  selector: 'app-nav-history',
  templateUrl: './nav-history.component.html',
  styleUrl: './nav-history.component.scss'
})
export class NavHistoryComponent implements OnInit {
  rowGroupMetadata: any;
  fund: Fund[] = [];
  dateYesterday: Date = new Date();
  datePreYesterday: Date = new Date();
  
  constructor(private navHistoryService: NavHistoryService) { }
  
  ngOnInit(): void {
    this.navHistoryService.getFundDetails().then(f => this.fund = f);
    this.dateYesterday = new Date(this.dateYesterday.setDate(this.dateYesterday.getDate() - 1));
    this.datePreYesterday = new Date(this.datePreYesterday.setDate(this.datePreYesterday.getDate() - 2));    
    
  }

  onSort() {
    this.updateRowGroupMetaData();
  }

  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};
    if (this.fund) {
      for (let i = 0; i < this.fund.length; i++) {
        const rowData = this.fund[i];
        const representativeName = rowData?.scheme?.name || '';

        if (i === 0) {
          this.rowGroupMetadata[representativeName] = { index: 0, size: 1 };
        }
        else {
          const previousRowData = this.fund[i - 1];
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


  onSchemeFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
}

}
