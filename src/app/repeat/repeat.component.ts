import { Component, OnInit } from '@angular/core';
import { CustomFormsModule } from 'ngx-custom-validators';


@Component({
  selector: 'app-repeat',
  templateUrl: './repeat.component.html',
  styleUrls: ['./repeat.component.css']
})
export class RepeatComponent implements OnInit {
  nameN = []

  newItem: any = [
    {
     
      'unitValue': '',
      'unitType': '',
      'unitvalue2': '',
      'unitType2': ''
    }
  ];


  constructor() { }

  ngOnInit() {
  }
  addNewRow() {
    this.newItem.push({
      'unitValue': '',
      'unitType': '',
      'unitvalue2': '',
      'unitType2': ''
    });
  }
  submit(f) {
    console.log(f.value)
  }

}
