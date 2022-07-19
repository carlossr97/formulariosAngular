import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild ('miFormulario') miFormulario!:NgForm;
  
  initForm = {
    producto : 'RTX',
    precio : 80000,
    existencias: 12
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    console.log(this.miFormulario);
    this.miFormulario.resetForm({
      producto:'RTX',
      precio:10000,
      existencias:12
    });
  }

  precioValido(){
     return  this.miFormulario?.form.controls['precio']?.touched && this.miFormulario?.form.controls['precio']?.value < 0
  }

  
}
