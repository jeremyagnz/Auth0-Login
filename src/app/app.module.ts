import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-jeremyagnz.us.auth0.com',
      clientId: 'UINsqV1GcIxFIqaodzUIrALQhM6UNu7P',
      cacheLocation:'localstorage',
      useRefreshTokens: true
    }),
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
