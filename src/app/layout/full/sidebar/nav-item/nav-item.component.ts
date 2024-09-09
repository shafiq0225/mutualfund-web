import { Component, Input } from '@angular/core';
import { NavItem } from './nav-item';
import { NgClass, NgIf } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { IconsModule } from '../../../../icon.module';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [NgIf, NgClass, MatListModule, IconsModule],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.scss'
})
export class NavItemComponent {
  @Input() item! : NavItem
}
