import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testpipe',
  templateUrl: './testpipe.component.html',
  styleUrls: ['./testpipe.component.css']
})
export class TestpipeComponent implements OnInit {
n:number=100;
base:number=2;
powd:number=3;
  constructor() { }

  ngOnInit() {
  }

}
