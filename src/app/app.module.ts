import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Component
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';
import { PatientInfoComponent } from './patient/patient-details/patient-info/patient-info.component';
import { MedicalHistoryComponent } from './patient/patient-details/medical-history/medical-history.component';
import { ControlsComponent } from './patient/patient-details/controls/controls.component';
import { WelcomeComponent } from './patient/welcome/welcome.component';
// Routing
import { AppRoutingModule, appRouting, appRoutingProviders } from './app-routing.module';
// Service
import { PatientService } from './patient/patient.service';
// Datepicker
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    PatientListComponent,
    PatientDetailsComponent,
    PatientInfoComponent,
    MedicalHistoryComponent,
    ControlsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    appRouting,
    Ng2DatetimePickerModule
  ],
  providers: [PatientService, appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
