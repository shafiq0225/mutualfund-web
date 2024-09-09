import { Component } from '@angular/core';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HeaderComponent } from "./header/header.component";
import { MatSidenav, MatSidenavContent, MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-full',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent,
    MatSidenavModule,
    MatSidenavContent,
    MatSidenav
  ],
  templateUrl: './full.component.html',
  styleUrl: './full.component.scss'
})
export class FullComponent {

}
