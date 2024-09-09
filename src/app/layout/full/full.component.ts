import { Component } from '@angular/core';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HeaderComponent } from "./header/header.component";
import { MatSidenav, MatSidenavContent, MatSidenavModule } from '@angular/material/sidenav';
import { NavHistoryComponent } from "../../pages/nav-history/nav-history.component";

@Component({
  selector: 'app-full',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent,
    MatSidenavModule,
    MatSidenavContent,
    MatSidenav, NavHistoryComponent],
  templateUrl: './full.component.html',
  styleUrl: './full.component.scss'
})
export class FullComponent {

}
