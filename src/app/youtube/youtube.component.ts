import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { map, switchMap, debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

import API_KEY from '../api-key';
const API_URL = 'https://www.googleapis.com/youtube/v3/search';
@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {


  lastName: string;
  addname = false;
  ngName: string = '';
  lastNamee: string;
  addName: any[] = [];
  //findName:string=''
  findvalue = false
  onEdit = false;
  counter = 0;
  currObj = {
    key:0
  };
  title = 'Angular RxJs YouTube Searcher';
  searchForm: FormGroup;
  results: any;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.searchForm = this.formBuilder.group({
      search: ['', Validators.required]
    });
    this.searchForm.controls.search.valueChanges.subscribe(result => console.log(result));
  }
  ngOnInit() {
    this.search();
    console.log("this.serach", this.searchForm)
  }
  search() {
    this.results = this.searchForm.controls.search.valueChanges.pipe(
      debounceTime(500),
      filter(v => v.length > 3),
      distinctUntilChanged(),
      switchMap(searchTerm => this.http.get<any>(`${API_URL}?q=${searchTerm}&key=${API_KEY}&part=snippet`)),
      map(response => response.items)
    );
  }


  edit(e) {

    console.log("name PPPP ", e)
    this.currObj = e;
    this.ngName = e.name
    this.onEdit = true;



  }
  add() {
   
    if (!this.onEdit) {
      this.onEdit = false;
      if (this.ngName) {
        this.addName.push({ name: this.ngName, key: this.counter++ })
        console.log('addded', this.addName)
      }
      this.addname = true;
      this.ngName = ''
    } else {
      this.addName = this.addName.map(item => {
        if(this.currObj.key == item.key){
          return {...item, ...{name:this.ngName}}
        }
        return item;
      })
      this.ngName = ''
    }

  }

}
