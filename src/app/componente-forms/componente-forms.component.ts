import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-componente-forms',
  templateUrl: './componente-forms.component.html',
  styleUrls: ['./componente-forms.component.css']
})
export class ComponenteFormsComponent implements OnInit {

  public frmDatosBasicos: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.frmDatosBasicos = this.formBuilder.group( {
      nombres: [null,[Validators.required]],
      apellidos: [null, [Validators.required]],
      email: [null,[Validators.required, Validators.email]]
    });
   }

  ngOnInit(): void {
   
  }

  send(): any{
    if (this.frmDatosBasicos.invalid){
      console.log("Error, en el formulario")
    }else{
      console.log(this.frmDatosBasicos.value)
    }
  }

}
