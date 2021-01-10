import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {TopNavComponent} from './routes/shared/top-nav/top-nav.component';
import {FooterComponent} from './routes/shared/footer/footer.component';
import {AuthLayoutComponent} from './routes/shared/layout/auth/auth-layout/auth-layout.component';
import {AdminLayoutComponent} from './routes/shared/layout/administrative/admin-layout/admin-layout.component';
import {SharedModule} from './routes/shared/shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {AuthGuard} from './routes/auth/login/shared/auth.guard';
import {NotificationComponent} from './routes/shared/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    AdminLayoutComponent,
    TopNavComponent,
    FooterComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  exports: [],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
