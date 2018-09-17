import { Component, OnInit } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public dat: string[] = []
  constructor() {

  }

  ngOnInit() {
    if (localStorage.getItem("input")) {
      this.dat = JSON.parse(localStorage.getItem("input"));
    }
  }
  create(data) {
    if (data) {
      this.dat.push(data);
      localStorage.setItem("input", JSON.stringify(this.dat));
      //console.log(this.dat)
    }
  }

}
