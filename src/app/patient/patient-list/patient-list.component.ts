import { Component, OnInit } from '@angular/core';

import { PatientService } from '../patient.service';
import { IPatient } from '../../../api/patient';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  _patients: IPatient[];
  errorMessage: string;

  constructor(private _patientService: PatientService) { }

  ngOnInit() {
    this._patientService.getPatients()
      .subscribe(
      _patients => this._patients = _patients,
      error => this.errorMessage = <any>error);
  }

  selectPatient(elem: any) {
      var actives = document.querySelectorAll('li.active');
      [].forEach.call(actives, function(el) {
        el.classList.remove("active");
      })
      elem.classList.toggle('active');
  }

}
