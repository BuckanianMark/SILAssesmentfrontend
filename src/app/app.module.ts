import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { SectionHeaderComponent } from './components/partials/section-header/section-header.component';
import { SignupPageComponent } from './components/pages/signup-page/signup-page.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PhotosPageComponent } from './components/pages/photos-page/photos-page.component';
import { TitleEditPageComponent } from './components/pages/title-edit-page/title-edit-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgxSpinnerModule } from 'ngx-spinner';
import { Loadinginterceptor } from './Helpers/interceptor/loading.interceptor';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginatedControlsComponent } from './components/partials/paginated-controls/paginated-controls.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginPageComponent,
    SectionHeaderComponent,
    SignupPageComponent,
    PhotosPageComponent,
    TitleEditPageComponent,
    NotFoundPageComponent,
    PaginatedControlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BreadcrumbModule,
    HttpClientModule,
    NgxSpinnerModule.forRoot({ type: 'square-jelly-box'}),
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toast-bottom-right',
    }),
    NgxPaginationModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:Loadinginterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
