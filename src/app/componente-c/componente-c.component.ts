import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-componente-c',
  templateUrl: './componente-c.component.html',
  styleUrls: ['./componente-c.component.css']
})
export class ComponenteCComponent implements OnInit {
  valor = "hola";
  @Input () mensaje ="";

   //opcion 1
  public visible = false;

   //opcion 2
   public mostrarTexto = true;
   public texto = "Este es el texto que puedes ocultar. Opcion 2";
   
   Texto() {
     this.mostrarTexto = !this.mostrarTexto;
   }
   //
  constructor() { }

  ngOnInit(): void {
    console.log(this.mensaje)
  }

}
