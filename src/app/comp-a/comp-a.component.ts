import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent implements OnInit {
  formA : FormGroup
  nombreA:any;
  recibe ='';
 

  constructor (private fb: FormBuilder) { }

  ngOnInit() {
    this.initFormA();
  }
  initFormA(){
    this.formA = this.fb.group({
      nombre: ['',[Validators.required]],
      apellido:'',
      puesto: '',
    
          });
  }
  guardar (){
    debugger
    this.formA.value;
    this.nombreA= this.formA.value;
    
  }
  onRecibeCompA(event: any){
    debugger;
    this.recibe = event;
  }
}