import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  
  // miFormulario: FormGroup = new FormGroup(
  //   {
  //     'nombre': new FormControl('RTX 4080ti'),
  //     'precio': new FormControl(400000),
  //     'existencias': new FormControl('10') 
      
  //   })

  miFormulario: FormGroup = this.fb.group({
    'nombre': ['', [Validators.required, Validators.minLength(3)]],
    'precio': [, [Validators.required, Validators.minLength(3), Validators.min(0)]],
    'existencias': ['', [Validators.required, Validators.minLength(3)]] 
  })



    constructor(private fb:FormBuilder) { }


  ngOnInit(): void {
  }

  campoEsValido( campo:string ){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }

  guardar(){

    
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      console.log("NO valido")
      return
    }
    this.miFormulario.reset();
    console.log("es valido")
  }
}
