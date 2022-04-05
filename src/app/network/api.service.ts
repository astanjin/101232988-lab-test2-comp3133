import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Mission}from '../models/mission'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) {
    
     this.getData()
   }
  
 public getData(){
  const url ='https://api.spacexdata.com/v3/launches'
   return this.http.get<any>(url)
  //  .subscribe((res)=>{
  //    this.data=res
  //    console.log(this.data)
  //  })
  }
}
 
