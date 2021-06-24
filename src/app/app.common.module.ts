import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import {DropdownModule} from 'primeng/dropdown';
import {DataViewModule} from 'primeng/dataview';
import {ChartModule} from 'primeng/chart';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import {MatNativeDateModule} from '@angular/material/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from './view/login/login.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { MessagesComponent } from './view/messages/messages.component';
import { DialogComponent } from './view/dialog/dialog.component';
import { HeaderComponent } from './view/layout/header/header.component';

registerLocaleData(localeId, 'id-ID', localeIdExtra);
registerLocaleData(localeId, 'id'); 
@NgModule({
  imports: [
      CommonModule,
        RouterModule,
        ButtonModule,
        InputTextModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MessagesModule,
        MessageModule,
       ProgressSpinnerModule,
       BrowserAnimationsModule,
      ConfirmDialogModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatDialogModule,
      NoopAnimationsModule,
      DropdownModule,
      ChartModule,
      DataViewModule
  ],
  declarations: [
    AppComponent, 
    LoginComponent, 
    DashboardComponent,
    MessagesComponent,
    DialogComponent,
    HeaderComponent
  ],
  entryComponents: [
    DialogComponent
  ],
  bootstrap: [],
  providers: [
    CookieService,
    DatePipe,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ]
})

export class AppCommonModule {}
function localeIdExtra(localeId: any, arg1: string, localeIdExtra: any) {
  throw new Error('Function not implemented.');
}

function localeId(localeId: any, arg1: string, localeIdExtra: (localeId: any, arg1: string, localeIdExtra: any) => void) {
  throw new Error('Function not implemented.');
}

