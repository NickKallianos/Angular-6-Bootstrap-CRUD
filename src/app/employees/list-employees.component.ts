import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
 employees: Employee[] = [
{
id: 1,
name: 'Mark',
gender: 'Male',
contactPreference: 'Email',
email: 'mark@gmail.com',
dateOfBirth: new Date('10/25/1988'),
department: 'IT',
isActive: true,
phoneNumber: 232323,
photoPath: 'assets/images/mark.png'
},
{
  id: 2,
  name: 'John',
  gender: 'Male',
  contactPreference: 'Email',
  email: 'mark@gmail.com',
  dateOfBirth: new Date('10/25/1988'),
  department: 'IT',
  isActive: true,
  phoneNumber: 232323,
  photoPath: 'assets/images/mark.png'
},
{
  id: 3,
  name: 'Maria',
  gender: 'Female',
  contactPreference: 'Telephone',
  email: 'maria@gmail.com',
  dateOfBirth: new Date('10/25/1988'),
  department: 'IT',
  isActive: true,
  phoneNumber: 232323,
  photoPath: 'assets/images/mark.png'
}



];

 constructor() { }

  ngOnInit() {
  }

}
