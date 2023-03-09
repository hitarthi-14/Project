import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewAttendanceComponent } from './dashBoard/view-attendance/view-attendance.component';
import { UpdateProfileComponent } from './dashBoard/update-profile/update-profile.component';
import { DashboardComponent } from './dashBoard/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewAttendanceComponent,
    UpdateProfileComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
