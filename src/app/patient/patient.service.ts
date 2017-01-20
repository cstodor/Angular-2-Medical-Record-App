import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IPatient } from '../../api/patient';

@Injectable()
export class PatientService {

  private patientsUrl = 'api/patients.json';

  constructor(private _http: Http) { }

  getPatients(): Observable<IPatient[]> {
    return this._http.get(this.patientsUrl)
      .map(response => <IPatient[]>response.json().patientsData)
  }

  getPatient(id: number): Observable<IPatient> {
    return this.getPatients()
      .map(patients => patients.find(patient => patient.id === id));
  }
}
