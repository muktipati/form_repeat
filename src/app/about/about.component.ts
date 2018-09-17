import { Component, OnInit } from '@angular/core';
import { PromiseService } from '../promise.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  constructor(private promiseService: PromiseService) { }

  ngOnInit() {
    console.log("hi")
    // this.promiseService.add(2, 4).then(function (res) {
      
    //   console.log("response is ", res)
    // }).catch(function (err) {
    //   console.log("error is ", err)
    // })

this.promiseService.getRecord().subscribe(
  (res)=>{
    console.log("this data is ",res);
  },
  (err)=>{
    console.log("this data is ",err);
  },
  ()=>{
    console.log("nothing ");
  }
)

this.promiseService.getUser().then(function(res){

  console.log("user list is ",res.json().data)
})

  }

}
