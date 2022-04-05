import { Component, OnInit } from '@angular/core';
import{Mission}from '../models/mission'
import { ApiService } from '../network/api.service';


@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
   data=[]
   selectedMi?: Mission;
  constructor( private apiSer:ApiService) { }

  ngOnInit(): void {
   this.apiSer.getData().subscribe((res)=>{
     this.data=res
     console.log(this.data)
   })
  }
  onSelect(mission: Mission): void {
    
    this.selectedMi = mission;
    
  }
}
