import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Corrected import statement
import { EmployeeComponent } from './employee/employee.component';
import { OrganizationComponent } from './organization/organization.component';

const routes: Routes = [
  // Define your routes here
  {path:"employee", component: EmployeeComponent},
  {path:"organization", component:OrganizationComponent},
  {path:"",redirectTo:"employee", pathMatch:"full"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
