import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
// Service
import { PatientService } from '../../patient.service';
// Interface
import { IPatient } from '../../../../api/patient';

@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.css']
})
export class MedicalHistoryComponent implements OnInit, OnDestroy {

  _patient: IPatient;
  private sub: Subscription;
  
  constructor(
    private _patientService: PatientService,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    // Get Single Patient
    this.sub = this._route.params.subscribe(
      (params: any) => {
        let id = +params['id'];
        if (id) {
          this._patientService.getPatient(id).subscribe(patient => {
            this._patient = patient;
          });
        }
      }
    );
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
