import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})

export class MenuLateralComponent {

  itensMenu: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.itensMenu = [
      { label: 'Início', icon: 'pi pi-fw pi-home', routerLink:'/home' },
      {
        label: 'Clientes', icon: 'pi pi-fw pi-users',
        items: [{ label: 'Novo Cliente' },
        { label: 'Pesquisa Cliente' }]
      },
      {
        label: 'Serviços', icon: 'pi pi-fw pi-cog',
        items:[{label:'Nova O.S'},{label:'O.Ss Agendadas'},{label:'O.Ss Abertas'},{label:'O.Ss sem agendamento'}]
      },
      {
        label: 'Materiais', icon: 'pi pi-fw pi-paperclip',
        items:[{label:'Novo Item'},{label:'Entrada de Material'},{label:'Requisição de Material'},{label:'Baixa de Material'},{label:'Pesquisa Material'}]
      },
      {
        label: 'Funcionários', icon: 'pi pi-fw pi-user',
        items:[{label:'Novo Funcionário', routerLink:'/cad-func'},{label:'Pesquisa Funcionário'}]
      },
      { label: 'Financeiro', icon: 'pi pi-fw pi-dollar' }
    ]
  }
}
