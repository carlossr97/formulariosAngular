import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {


  miFormulario: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([ 
      ['algo',Validators.required],
      ['Otra cosa xD', Validators.required],
      ['algo',Validators.required],
      ['algo',Validators.required],
      ['algo',Validators.required],
      ['algo',Validators.required],
      ['algo',Validators.required],
    ],Validators.required)})

  nuevoFavorito: FormControl = this.fb.control('',Validators.required);  

  get favoritosArray(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  

  constructor(private fb: FormBuilder  ) { }

  ngOnInit(): void {

  }

  campoEsValido( campo:string ){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }

  agregarFavorito(){
    if ( this.nuevoFavorito.invalid ) { return; }

    //this.favoritosArray.push( new FormControl (this.nuevoFavorito.value, Validators.required) );

    this.favoritosArray.push( this.fb.control ( this.nuevoFavorito.value, Validators.required ) );
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

  borrar(index:number){

    this.favoritosArray.removeAt(index);
  }


}
