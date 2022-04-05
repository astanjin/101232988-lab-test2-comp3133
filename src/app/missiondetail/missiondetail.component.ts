import { Component, OnInit ,Input} from '@angular/core';
import {Mission} from '../models/mission'

@Component({
  selector: 'app-missiondetail',
  templateUrl: './missiondetail.component.html',
  styleUrls: ['./missiondetail.component.css']
})
export class MissiondetailComponent implements OnInit {
  @Input() mission?: Mission;
  constructor() { }

  ngOnInit(): void {
  }

}
