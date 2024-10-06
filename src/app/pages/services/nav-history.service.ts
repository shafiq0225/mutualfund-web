import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fund } from '../Models/fund';

@Injectable({
  providedIn: 'root'
})
export class NavHistoryService {

  constructor(private http: HttpClient) { }


  getFundDetails() {
    return this.http.get<any>('assets/demo/data/nav-history.json')
      .toPromise()
      .then(res => res.data as Fund[])
      .then(data => data);
  }
}
