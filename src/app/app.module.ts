import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
/**import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component'; */
import { ServerComponent } from './server/server.component';
import { UserNameComponent } from './UserName/userName.component';
import { DisplayComponent } from './displayDetails/displayDetails.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    /**SuccessAlertComponent,
    WarningAlertComponent,*/
    ServerComponent,
    UserNameComponent,
    DisplayComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
