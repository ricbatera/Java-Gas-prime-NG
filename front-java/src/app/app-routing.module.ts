import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelaInicialComponent } from './conteudo/tela-inicial/tela-inicial.component'
import { CadFuncComponent } from './cadastros/cad-func/cad-func.component'

const routes: Routes = [{
  path:"home",
  component:TelaInicialComponent
},
{
  path:"cad-func",
  component:CadFuncComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
