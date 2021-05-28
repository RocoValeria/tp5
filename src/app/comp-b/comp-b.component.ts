import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent implements OnInit {
  @Input() txtButton: any;
  @Output() btnEvent = new EventEmitter<string>();
  valorButton ='';
    valorB :('');
  initBForm(){}

  ngOnInit(): void {
  this.txtButton = "estoB";
  }
  
guardarB(){
 
   
    this.valorButton=this.valorB
  
}
 devolverAlCompA(){
   this.btnEvent.emit("");
 }
}

