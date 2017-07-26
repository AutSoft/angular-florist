import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdIconModule, MdToolbarModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { HttpModule } from '@angular/http';
import { NotificationService } from './notification.service';
import { ToastModule } from 'ng2-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdIconModule,
    MdToolbarModule,
    AppRoutingModule,
    AuthModule,
    HttpModule,
    ToastModule.forRoot()
  ],
  bootstrap: [AppComponent],
  providers: [NotificationService]
})
export class AppModule {
}
