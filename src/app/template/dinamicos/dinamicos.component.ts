import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

@ViewChild ('formularioDinamico') formularioDinamico!:NgForm;



persona:any = {
  nombre: 'Carlos',
  favoritos: [
    {id:1,nombre: 'jose'}
  ]
}
  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
  

  }

}
