import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path: 'nuevoporvenirlogin', component: SignInComponent },
  //{ path: 'register', component: SignUpComponent }
]
  ;

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
})
export class LandingRoutingModule { }
