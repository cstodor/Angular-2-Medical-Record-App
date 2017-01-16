import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    PatientListComponent,
    PatientDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
