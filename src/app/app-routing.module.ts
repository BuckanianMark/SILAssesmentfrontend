import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { SignupPageComponent } from './components/pages/signup-page/signup-page.component';
import { UsersPageComponent } from './components/pages/users-page/users-page.component';
import { DisplayPageComponent } from './components/pages/display-page/display-page.component';
import { AlbumsPageComponent } from './components/pages/albums-page/albums-page.component';
import { SingleUserPageComponent } from './components/pages/single-user-page/single-user-page.component';
import { PhotosPageComponent } from './components/pages/photos-page/photos-page.component';
import { TitleEditPageComponent } from './components/pages/title-edit-page/title-edit-page.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { canActivate } from './Helpers/services/auth.guard';

const routes: Routes = [
  {path:"",component:HomeComponent,data:{breadcrumb:"Home"}},
  {path:"home",component:DisplayPageComponent,data:{breadcrumb:"Counts"},canActivate:[canActivate]},
  {path:"login",component:LoginPageComponent,data:{breadcrumb:"login-page"}},
  {path:"users",component:UsersPageComponent,data:{breadcrumb:"users-page"},canActivate:[canActivate]},
  {path:"user/:id",component:SingleUserPageComponent,data:{breadcrumb:{alias:"user"}},canActivate:[canActivate]},
  {path:"photos/:id",component:TitleEditPageComponent,data:{breadcrumb:"photo-edit"},canActivate:[canActivate]},
  {path:"albums",component:AlbumsPageComponent,data:{breadcrumb:"albums-page"},canActivate:[canActivate]},
  {path:"photos",component:PhotosPageComponent,data:{breadcrumb:"photos-page"},canActivate:[canActivate]},
  {path:"sign-up",component:SignupPageComponent,data:{breadcrumb:"sign-up"}},
  {path:"**",component:NotFoundPageComponent,data:{breadcrumb:"not-found"}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
