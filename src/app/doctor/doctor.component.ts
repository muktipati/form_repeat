import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  private doctorInfo: any[] = [
    {
      doctor_name: "Dr RK Pattanaik",
      age: '46',
      doctor_speciality: 'Dental',
      doctor_img: "https://myblue.bluecrossma.com/sites/g/files/csphws1041/files/inline-images/Doctor%20Image%20Desktop.png",
      doctor_hospital:"Bangalore"
    },
    {
      doctor_name: "Dr. Anil Kumar Behera",
      age: '65',
      doctor_speciality: 'Internal Medicine',
      doctor_img: "http://nationalpainreport.com/wp-content/uploads/2014/07/bigstock-Doctor-physician-Isolated-ov-33908342-e1446160270762.jpg",
      doctor_hospital:"Odisha"
    },
    {
      doctor_name: " Dr. Dharani Bai G",
      age: '55',
      doctor_speciality: 'Gynecologist ',
      doctor_img: "https://images1-fabric.practo.com/dr-rachna-verma-1471327522-57b2ad22b10c3.jpg",
      doctor_hospital:"Kundalahalli, Bangalore"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
