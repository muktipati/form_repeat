import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dynamicform',
  templateUrl: './dynamicform.component.html',
  styleUrls: ['./dynamicform.component.css']
})
export class DynamicformComponent implements OnInit {
  private frm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
   this.frm= this.fb.group({
   first_name:[null,[Validators.required]] ,
   department:[null,[Validators.required]] ,
   patients:this.fb.array([this.createForm()])
    })
  }
  createForm(){
    return this.fb.group({
      patient_name:[null,[Validators.required]],
      patient_disease:[null,[Validators.required]]
    })
  }
  delpatientsForm(index){
    var controls= this.frm.get('patients') as FormArray;
    controls.removeAt(index);
  }
  addpatientsForm(){
    var controls= this.frm.get('patients') as FormArray;
    console.log("controls",controls)
    controls.push(this.createForm());
  }
}
