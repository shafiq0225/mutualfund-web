import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavHistoryComponent } from './nav-history/nav-history.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavHistoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mutualfund-web';
}
