import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavLeftComponent } from './nav-left/nav-left.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavLeftComponent,
    BreadcrumbsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavLeftComponent,
    BreadcrumbsComponent
  ]
})
export class SharedModule { };
