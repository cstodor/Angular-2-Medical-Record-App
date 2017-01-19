import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
// Service
import { PatientService } from '../../patient.service';
// Interface
import { IPatient } from '../../../../api/patient';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit, OnDestroy {

  _patients: IPatient[];
  _patient: IPatient;
  private sub: Subscription;

  constructor(
    private _patientService: PatientService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    // Get Single Patient
    this.sub = this._route.params.subscribe(
      (params: any) => {
        let id = +params['id'];
        if (id) {
          this._patientService.getPatient(id).subscribe(_patient => {
            this._patient = _patient;
          });
        }
      }
    );
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
