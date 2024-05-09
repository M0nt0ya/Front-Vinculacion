import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from '../shared/shared.module';
import { CollaboratorsComponent } from './collaborators/collaborators.component';
import { ContactComponent } from './contact/contact.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './landing-page/sign-in/sign-in.component';
import { SignUpComponent } from './landing-page/sign-up/sign-up.component';
import { MissionVisionComponent } from './missionVision/missionVision.component';
import { FormComponent } from './form/Form.component';
import { ConsultancyComponent } from './consultancy/consultancy.component';

@NgModule({
  declarations: [
    HomeComponent,
    CollaboratorsComponent,
    ContactComponent,
    HistoryComponent,
    MissionVisionComponent,
    SignInComponent,
    SignUpComponent,
    FormComponent,
    ConsultancyComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    CommonModule,
    FormsModule,
    RouterModule,
    ToastrModule.forRoot(),
    SharedModule
  ],
  exports: [
    SharedModule
  ]
})
export class PagesModule { }
