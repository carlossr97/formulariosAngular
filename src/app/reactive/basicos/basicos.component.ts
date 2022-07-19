import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  constructor() { }

  miFormulario: FormGroup = new FormGroup(
    {
      'nombre': new FormControl('RTX 4080ti') 
    })

  ngOnInit(): void {
  }

}
