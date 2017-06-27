import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MdButtonModule, MdInputModule } from '@angular/material';
import { TokenService } from './token.service';
import { AuthService } from './auth.service';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdInputModule,
    MdButtonModule
  ],
  declarations: [LoginComponent, RegisterComponent],
  providers: [TokenService, AuthService]
})
export class AuthModule {
}
