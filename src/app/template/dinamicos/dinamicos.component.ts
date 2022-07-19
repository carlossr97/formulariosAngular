import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Favoritos, Personas } from 'src/app/interfaces/personas';
@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

@ViewChild ('formularioDinamico') formularioDinamico!:NgForm;



persona:Personas = {
  nombre: 'Carlos',
  favoritos: [
    {id:1,nombre: 'batman'},
    {id:2,nombre: 'spideman'}, 
    {id:3,nombre: 'marvel'}
  ]
}
  constructor() { }

  ngOnInit(): void {
   

  }

  guardar(){
    let obj:Favoritos = {id:0,nombre:''}
    obj = {id:this.persona.favoritos.length + 1,
      nombre:this.formularioDinamico.value.favoritos
    }
   this.persona.favoritos.push(obj);
    console.table(this.persona);
  }

  borrar(index:number){

    console.log(index)
  
    this.persona.favoritos.splice(index,1);
      
    
  }

}
