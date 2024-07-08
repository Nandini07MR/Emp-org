import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';

export interface EmployeeData{
  id:number;
  employee_name:string;
  employee_salary:number;
  employee_age:number;
  profile_image:string;
}

@Component({
  selector: 'app-home',
  templateUrl: './Employee.component.html',
  styleUrls: ['./Employee.component.css']
})
export class EmployeeComponent implements OnInit{
 
private apiUrl = 'https://jsonplaceholder.typicode.com/users';  
data!:any[]
 
  constructor(private http: HttpClient, private router:Router) {
    
  }
 
  ngOnInit() {
    this.getEmployees().subscribe((data:any) => {
      console.log(data)
      this.data= data
     
    });
  }
 
  getEmployees(): Observable<EmployeeData[]> {
    return this.http.get<EmployeeData[]>(this.apiUrl);
  }
 onClick(){
  this.router.navigate(['/organization'])
 }
 
}
