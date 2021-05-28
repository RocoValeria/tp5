import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent implements OnInit {
  form : FormGroup
  
  valorButton ='';

  constructor (private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }
  initForm(){
    this.form = this.fb.group({
      nombre: ['',[Validators.required]],
      apellido:'',
      puesto: '',
     valorBtn:''
      //Nombre 
      //DNI
      //fechaNacimiento

    });
  }
  guardar (){
    debugger
   
 
    this.valorButton=this.form.value.valorBtn
  }
  onRecibeCompA(event: any){
    debugger;
    this.valorButton = event;
  }
}