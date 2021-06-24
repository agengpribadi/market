/** 
 * ini Module buat berdiri sendiri, jika akan dijalankan lewat angular server
 * ng s
*/

import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {CommonModule} from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from '../app.component';
import { AppCommonModule } from '../app.common.module';
import { appStates } from '../app.states';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    AppCommonModule, 
    CommonModule, 
    BrowserModule, 
    RouterModule.forRoot(appStates), BrowserAnimationsModule
  ],
  declarations: [],
  bootstrap: [AppComponent],
  entryComponents: [],
  providers: [],
  exports: [RouterModule]
})

export class AppModule {}
