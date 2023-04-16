import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent {
  employees = [
    {
      name: 'Petr Petrov',
      position: 'CSO',
      img: '../../../assets/profile-pictures/p1.png',
      description: '(Chief Sales Officer)',
    },
    {
      name: 'Sidor Sidorov',
      position: 'CMO',
      img: '../../../assets/profile-pictures/p2.png',
      description: '(Chief Marketing Officer)',
    },
    {
      name: 'Vasiliy Vasilev',
      position: 'CIO',
      img: '../../../assets/profile-pictures/p3.png',
      description: '(Chief Information Officer)',
    },
    {
      name: 'Igor Igorev',
      position: 'CTO',
      img: '../../../assets/profile-pictures/p4.png',
      description: '(Chief Technology Officer)',
    },
    {
      name: 'Vladimir Vladimirov',
      position: 'COO',
      img: '../../../assets/profile-pictures/p5.png',
      description: '(Chief Operating Officer)',
    },
    {
      name: 'Sergey Sergeev',
      position: 'CPO',
      img: '../../../assets/profile-pictures/p1.png',
      description: '(Chief Product Officer)',
    },
    {
      name: 'Mikhail Mikhailov',
      position: 'CLO',
      img: '../../../assets/profile-pictures/p2.png',
      description: '(Chief Legal Officer)',
    },
    {
      name: 'Dmitriy Dmitriev',
      position: 'CDO',
      img: '../../../assets/profile-pictures/p3.png',
      description: '(Chief Data Officer)',
    },
    {
      name: 'Andrey Andreev',
      position: 'CRO',
      img: '../../../assets/profile-pictures/p4.png',
      description: '(Chief Risk Officer)',
    },
  ];

}
