import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, inject, provideAppInitializer } from '@angular/core';
import { provideHttpClient, HTTP_INTERCEPTORS, withInterceptors, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule, POSITION } from 'ngx-ui-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { ErrorModalComponent } from './shared/components/error-modal/error-modal.component';

import { authInterceptor } from './shared/interceptors/auth.interceptor';
import { httpTimeoutInterceptor } from './shared/interceptors/timeout.interceptor';
import { errorInterceptor } from './shared/interceptors/error.interceptor';

import { ConfigService } from './config.service';
import { MessageService } from './shared/services/message.service';
import { LookupService } from './shared/services/lookup.service';
import { AuthService } from './shared/services/auth.service';
import { AuthGuardService } from './shared/services/auth.guard.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    ErrorModalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TypeaheadModule.forRoot(),
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
    NgxUiLoaderModule.forRoot({
      bgsPosition: POSITION.centerCenter,
      // bgsColor: '#dc143c',
      bgsType: 'square-jelly-box',
      // fgsColor: '#dc143c',
      fgsType: 'square-jelly-box'
    }),
    NgxUiLoaderHttpModule.forRoot({
      showForeground: false,
      exclude: [
        `/o/token/`,
        `/o/revoke_token/`,
        `/api/current-user`
      ]
    }),
  ],
  providers: [
    ConfigService,
    provideAppInitializer(() => {
      const configService = inject(ConfigService);
      return configService.loadConfig();
    }),
    provideHttpClient(withInterceptors([errorInterceptor, authInterceptor, httpTimeoutInterceptor])),
    MessageService,
    LookupService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
