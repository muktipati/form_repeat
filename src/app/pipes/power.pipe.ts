import { PipeTransform,Pipe } from "@angular/core";

@Pipe({name:'power'})
export class PowerPipe implements PipeTransform{
  transform(t1,t2){
      var p =1;
      for(let i=1;i<=t2;i++){
          p = (t1*i)
      }
      return (p)
  }  
}