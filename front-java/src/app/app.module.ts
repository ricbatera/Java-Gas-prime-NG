import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ToolbarModule} from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import {PanelMenuModule} from 'primeng/panelmenu';
import {CardModule} from 'primeng/card';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { Card1Component } from './conteudo/card1/card1.component';
import { CartaoComponent } from './conteudo/cartao/cartao.component';
import { Card2Component } from './conteudo/card2/card2.component';
import { Cartao2Component } from './conteudo/cartao2/cartao2.component';
import { Card3Component } from './conteudo/card3/card3.component';
import { CadFuncComponent } from './cadastros/cad-func/cad-func.component';
import { TelaInicialComponent } from './conteudo/tela-inicial/tela-inicial.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MenuLateralComponent,
    ConteudoComponent,
    Card1Component,
    CartaoComponent,
    Card2Component,
    Cartao2Component,
    Card3Component,
    CadFuncComponent,
    TelaInicialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    PanelMenuModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
