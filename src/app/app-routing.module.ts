import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LandingRoutingModule } from './pages/landing-page/landing-routing.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PagesRoutingModule } from './pages/pages-routing.module';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    LandingRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
