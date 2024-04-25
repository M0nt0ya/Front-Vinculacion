import { NgModule } from '@angular/core';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ToastrModule } from 'ngx-toastr';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PagesModule } from './pages/pages.module';
import { AuthGuard } from './services/auth.guard';
import { TokenInterceptor } from './services/token-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    ImageCropperModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgxWebstorageModule.forRoot(),
    PagesModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
