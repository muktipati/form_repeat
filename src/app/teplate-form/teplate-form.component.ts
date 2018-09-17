import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-teplate-form',
  templateUrl: './teplate-form.component.html',
  styleUrls: ['./teplate-form.component.css']
})

export class TeplateFormComponent implements OnInit {
@ViewChild('f') frm;
  constructor() { }

  ngOnInit() {
  }
  register(){
    console.log("my form is ",this.frm.value)
  }
}
