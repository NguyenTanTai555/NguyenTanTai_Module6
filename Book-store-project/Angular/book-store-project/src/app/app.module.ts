import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './account/component/login/login.component';
import { HomeComponent } from './share/component/home/home.component';
import { HeaderComponent } from './share/component/header/header.component';
import { FooterComponent } from './share/component/footer/footer.component';
import { DetailComponent } from './detail/detail.component';
import { CartComponent } from './share/component/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DetailComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
