import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doctor-info',
  templateUrl: './doctor-info.component.html',
  styleUrls: ['./doctor-info.component.css']
})
export class DoctorInfoComponent implements OnInit {
@Input() info:string;
  constructor() { }

  ngOnInit() {
  }

}
