import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get('http://127.0.0.1:8000/api/showEmployee');
  }
  insertData(data:any){
    return this.http.post('http://127.0.0.1:8000/api/addEmployee',data);
  }

  deleteData(id:any){
    return this.http.delete('http://127.0.0.1:8000/api/deleteEmployee/'+id);
  }

  getEmployeeById(id:any){
    return this.http.get('http://127.0.0.1:8000/api/getEmployeeById/'+id);
  }
  updateData(id:any,data:any){
    return this.http.put('http://127.0.0.1:8000/api/updateEmployee/'+id,data);
  }


}
