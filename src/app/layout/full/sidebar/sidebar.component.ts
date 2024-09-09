import { Component } from '@angular/core';
import { BrandingComponent } from './branding/branding.component';
import { MatListModule } from '@angular/material/list';
import { NavItemComponent } from "./nav-item/nav-item.component";
import { navItems } from './sidebar-data';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [BrandingComponent, MatListModule, NavItemComponent, NgFor],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  navItems = navItems;
}
