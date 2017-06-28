import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdIconModule, MdToolbarModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryPlantsDbService } from '../mocks/in-memory-plants-db-service';
import { environment } from '../environments/environment';

const devImports = environment.production ? [] : [InMemoryWebApiModule.forRoot(InMemoryPlantsDbService, {delay: 1000})];

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
    ...devImports
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {
}
