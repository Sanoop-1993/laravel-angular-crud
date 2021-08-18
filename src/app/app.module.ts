import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './componets/employees/employees.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { EditemployeeComponent } from './componets/editemployee/editemployee.component';


const routes:Routes=[
  {
    path:'',
    component:EmployeesComponent
  },
  {
    path:'edit/:id',
    component:EditemployeeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    NavbarComponent,
    EditemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
