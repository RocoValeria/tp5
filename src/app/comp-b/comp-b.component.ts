import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent implements OnInit {
  @Input() form: any;
  
  @Output() btnEvent = new EventEmitter <string>();
  
    constructor(){}  
  ngOnInit(): void {
   debugger
    this.form;
  }
  
enviarAlCompA(){
  this.form.nombre="Juan";
   this.btnEvent.emit(this.form.nombre);
  
 }
}

