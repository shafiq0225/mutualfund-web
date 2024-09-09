import { Component } from '@angular/core';
import { IconsModule } from '../../../icon.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IconsModule, MatToolbarModule, MatButtonModule, MatBadgeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
