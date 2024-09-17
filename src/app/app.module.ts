import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BadgeModule } from 'primeng/badge';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { MenuComponent } from './layout/sidebar/menu/menu.component';
import { MenuItemComponent } from './layout/sidebar/menu/menu-item/menu-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavHistoryComponent } from './pages/nav-history/nav-history.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TopbarComponent,
    SidebarComponent,
    FooterComponent,
    MenuComponent,
    MenuItemComponent,
    NavHistoryComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BadgeModule,
    TableModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TabViewModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
