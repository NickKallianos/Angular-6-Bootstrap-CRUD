import {
  ValidatorFn,
  Validator,
  AbstractControl,
  FormControl,
  NG_VALIDATORS,
  NgForm,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
// checked radiobutton by default
export class CreateEmployeeComponent implements OnInit {
gender = 'male';
  constructor() { }

  ngOnInit() {
  }

  saveEmployee(empForm: NgForm): void {
    console.log(empForm);
  }
}
