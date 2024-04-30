import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';
import { CollaboratorsComponent } from './collaborators/collaborators.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/Form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'collaborators', component: CollaboratorsComponent },
  //{ path: 'history', component: HistoryComponent },
  //{ path: 'mission-vision', component: MissionVisionComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: 'form', component: FormComponent, canActivate: [AuthGuard] }]
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
export class PagesRoutingModule { }
