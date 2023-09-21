import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteAComponent } from './componente-a/componente-a.component';
import { ComponenteBComponent } from './componente-b/componente-b.component';
import { ComponenteCComponent } from './componente-c/componente-c.component';
import { ComponenteFormsComponent } from './componente-forms/componente-forms.component';

const routes: Routes = [
  //redireccion directa //{path: '', component: ComponenteCComponent}
  {path: '', redirectTo: 'componente-principal', pathMatch: 'full'},
  {path: 'componente-principal', component: ComponenteAComponent},
  {path: 'componente-segundario/:nombre', component: ComponenteBComponent},
  {path: 'componente-terceario', component: ComponenteCComponent},
  {path: 'componente-formularios', component: ComponenteFormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
