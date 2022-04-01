import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers: [	
    UserService
  ]
})
export class UserModule { }
