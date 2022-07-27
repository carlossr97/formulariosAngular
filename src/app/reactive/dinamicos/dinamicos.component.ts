import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  constructor(private fb: FormBuilder  ) { }

  ngOnInit(): void {

  }

  miFormulario: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([ 
      ['algo',Validators.required],
      ['Otra cosa xD', Validators.required]
    ],Validators.required)
    
  })

  campoEsValido( campo:string ){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }

  guardar(){
    if(this.miFormulario.invalid){
      console.log("el formulario es invalido")
      return;
    }
    else{
      console.log("el formulario es valido")
      
    }
  }


}
