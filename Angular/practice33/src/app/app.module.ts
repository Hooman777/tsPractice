import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VihanComponent } from './vihan/vihan.component';
import { AlertComponent } from './alert/alert.component';
import { ListOfActionsService } from './list-of-actions.service';
import { ActionsComponent } from './actions/actions.component';

@NgModule({
  declarations: [
    AppComponent,
    VihanComponent,
    AlertComponent,
    ActionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ListOfActionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
