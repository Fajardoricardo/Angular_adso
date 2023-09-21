import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-componente-b',
  templateUrl: './componente-b.component.html',
  styleUrls: ['./componente-b.component.css']
})
export class ComponenteBComponent implements OnInit {

  public nombre = '';
  
  constructor(public route: ActivatedRoute) {
    this.nombre=this.route.snapshot.params['nombre']
    console.log(this.nombre, typeof this.nombre)
   }

  ngOnInit(): void {
  }

}
