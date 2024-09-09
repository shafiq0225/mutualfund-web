import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { NavDataComponent } from "./nav-data/nav-data.component";

@Component({
  selector: 'app-nav-history',
  standalone: true,
  imports: [MatTabsModule, MatCardModule, NavDataComponent],
  templateUrl: './nav-history.component.html',
  styleUrl: './nav-history.component.scss'
})
export class NavHistoryComponent {

}
