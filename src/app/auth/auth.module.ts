import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MdButtonModule, MdInputModule } from '@angular/material';
import { TokenService } from './token.service';
import { AuthService } from './auth.service';
import { RegisterComponent } from './register/register.component';
import { CustomFormsModule } from 'ng2-validation';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdInputModule,
    MdButtonModule,
    CustomFormsModule,
    RouterModule
  ],
  declarations: [LoginComponent, RegisterComponent],
  providers: [TokenService, AuthService]
})
export class AuthModule {
}
