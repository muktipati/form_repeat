import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-obs1',
  templateUrl: './obs1.component.html',
  styleUrls: ['./obs1.component.css']
})
export class Obs1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getsData().subscribe(
      (res)=>{
        console.log("response is ",res)
      },
      (err)=>{
        console.log("err is ",err)
      },
      ()=>{
        console.log("observable complected ")
      }
    )
  }
  getsData(){
return new Observable((oberver)=>{
  setTimeout(()=>{
    oberver.next(1000)
  },1000)
  setTimeout(()=>{
    oberver.next(3000)
  },3000)
  setTimeout(()=>{
    oberver.complete()
  },6000)
})
  }
  getData(){

  }
}
