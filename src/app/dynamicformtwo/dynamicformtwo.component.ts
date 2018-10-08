import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormArray } from '@angular/forms';

@Component({
  selector: 'app-dynamicformtwo',
  templateUrl: './dynamicformtwo.component.html',
  styleUrls: ['./dynamicformtwo.component.css']
})
export class DynamicformtwoComponent implements OnInit {
  private fm:FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.fm = this.fb.group({
      company_name:[null,[Validators.required]],
      company_location:[null,[Validators.required]],
      company_pic:[null,[Validators.required]],
      employess :this.fb.array([this.createEmpForm()])
    })
  }
  createEmpForm(){
    return this.fb.group({
      emp_name:[null,[Validators.required]],
      emp_email:[null,[Validators.required]],
      emp_department:[null,[Validators.required]],
    })
  }
  
  addEmpForm(){
    var controls = this.fm.get('employess') as FormArray
    controls.push(this.createEmpForm())
    console.log(controls);
  }
  removeEmp(index){
    var controls = this.fm.get('employess') as FormArray
    controls.removeAt(index);
  }

}
