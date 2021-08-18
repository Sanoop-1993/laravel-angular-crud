import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/employee';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.scss']
})
export class EditemployeeComponent implements OnInit {

  id:any;
  data:any;
  employee = new Employee();

  constructor(private route:ActivatedRoute,private dataService:DataService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getData();
  }

  getData()
  {
    this.dataService.getEmployeeById(this.id).subscribe(res=>{
      this.data = res;
      this.employee = this.data;
    })
  }

  updateEmployee()
  {
    this.dataService.updateData(this.id,this.employee).subscribe(res=>{
      
    })
  }

}
