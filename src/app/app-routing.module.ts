import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateProfileComponent } from './dashBoard/update-profile/update-profile.component';
import { ViewAttendanceComponent } from './dashBoard/view-attendance/view-attendance.component';
import { combineLatest } from 'rxjs';
import { DashboardComponent } from './dashBoard/dashboard/dashboard.component';

const routes: Routes = [
  {path:"" ,component:DashboardComponent},
  {path:"update-profile",component:UpdateProfileComponent},
  {path:"view-attendance",component:ViewAttendanceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
