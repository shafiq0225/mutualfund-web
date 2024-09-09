import { Component } from '@angular/core';
import { FullComponent } from "./layout/full/full.component";
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FullComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mutualfund-web';
}
