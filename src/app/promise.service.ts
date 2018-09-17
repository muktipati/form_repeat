import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { resolve } from 'path';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromiseService {
  

  constructor(private http:Http) { }

getRecord(){
  return new Observable((observer)=>{
    setTimeout(function(){
      observer.next(3000)
    },1000)

    setTimeout(function(){
      observer.next(4000)
    },3000)

    setTimeout(function(){
      observer.next(7000)
    },5000)

    setTimeout(function(){
      observer.complete();
    },10000)
  })
}


getUser(){
      return this.http.get("https://reqres.in/api/users?page=2").toPromise();
}


  add(a, b) {
    var c = 0;
    return new Promise((resolve,reject)=>{
    setTimeout(function () {
      c = a + b;
    }, 1000);
    
  });
  }
}
