import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
@Input() formate
  constructor(private el:ElementRef) { }

  @HostListener('blur') onBlur(){
    let value:string= this.el.nativeElement.value;
    this.el.nativeElement.value = value.toLowerCase();
    if( this.formate === 'uppercase')
    {
      this.el.nativeElement.value = value.toUpperCase();
    }else{
      this.el.nativeElement.value = value.toLowerCase();
    }
    
  }
}
