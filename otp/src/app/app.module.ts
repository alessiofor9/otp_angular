import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisualizzaComponent } from './visualizza/visualizza.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RecuperaQrComponent } from './recupera-qr/recupera-qr.component';
import { RegistraidpcComponent } from './registraidpc/registraidpc.component';

@NgModule({
  declarations: [
    AppComponent,
    VisualizzaComponent,
    LoginComponent,
    HomepageComponent,
    RecuperaQrComponent,
    RegistraidpcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
