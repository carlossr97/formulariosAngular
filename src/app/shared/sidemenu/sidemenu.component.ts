import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
  ]
})
export class SidemenuComponent implements OnInit {

  constructor() { }

  menu:Menu[]=
  [
    {
      nombre:'basico',
      ruta:'./template/basicos'
    },
    {
      nombre:'switches',
      ruta:'./template/switches'
    },
    {
      nombre:'dinamico',
      ruta:'./template/dinamicos'
    }
  ];

  reactiveMenu:Menu[]=
  [
    {
      nombre:'basico',
      ruta:'./reactive/basicos'
    },
    {
      nombre:'switches',
      ruta:'./reactive/switches'
    },
    {
      nombre:'dinamico',
      ruta:'./reactive/dinamicos'
    }
  ];


  ngOnInit(): void {
  }

}
