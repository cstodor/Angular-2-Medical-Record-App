import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
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

  _patients: IPatient[];
  _patient: IPatient;
  patiendIndex: number = 1;
  private sub: Subscription;
  errorMessage: string;
  
  constructor(
    private _patientService: PatientService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    // Get All PatientService
    this._patientService.getPatients()
      .subscribe(
      _patients => this._patients = _patients,
      error => this.errorMessage = <any>error);
    // Get Single Patient
    this.sub = this._route.params.subscribe(
      (params: any) => {
        let id = +params['id'];
        this.patiendIndex = +params['id'];
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
