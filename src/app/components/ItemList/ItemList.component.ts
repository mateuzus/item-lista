import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item';

@Component({
  selector: 'app-ItemList',
  templateUrl: './ItemList.component.html',
  styleUrls: ['./ItemList.component.css']
})
export class ItemListComponent implements OnInit {

  items: Item[] = [{
    id: 1,
    nome: 'Mateus'
  },
  {
    id: 2,
    nome: 'Thiago'
  },
  {
    id: 3,
    nome: 'Carlos'
  },
  {
    id: 4,
    nome: 'Cleber'
  },
  {
    id: 5,
    nome: 'Ravi'
  },
  {
    id: 6,
    nome: 'Rafael'
  },
  {
    id: 7,
    nome: 'Diego'
  },
  {
    id: 8,
    nome: 'Felipe'
  },
  {
    id: 9,
    nome: 'Luis'
  },
  {
    id: 10,
    nome: 'Wiliiam'
  }]

  novoItem: string = '';
  titulo: string = ''
  tituloBotao: string = ''
  tituloLabel: string = ''
  tituloValidacao: string = ''

  exibirModal: boolean = false;
  adicionar: boolean = false

  itemAtualizado!: Item

  constructor() { }

  ngOnInit() {
  }

  editar(item: Item) {
    this.abrirModal(item, false)
    this.itemAtualizado = item
    this.novoItem = item.nome
  }

  deletar(item: Item) {
    this.items = this.items.filter(res => res.id != item.id)
  }

  abrirModal(item?: any, adicionar = true) {
    if (adicionar) {
      const novoId = this.items.length + 1;
      this.titulo = `ID: ${novoId}`
      this.exibirModal = true;
      this.tituloBotao = 'Adicionar'
      this.tituloLabel = 'Adicionar Item'
      this.adicionar = true
    } else {
      this.tituloBotao = 'Atualizar'
      this.tituloLabel = 'Atualizar Item'
      this.titulo = `ID: ${item.id}`
      this.exibirModal = true;
    }
  }

  adicionarItem() {
    if(this.novoItem.trim() == '') {
      this.tituloValidacao = 'O campo nome deve ser preenchido.'
      setTimeout(() => this.tituloValidacao = '', 3000)
      return 
    }
    if (this.novoItem.trim() !== '' && this.adicionar) {
      const novoId = this.items.length + 1;
      const novoItem = { id: novoId, nome: this.novoItem }
      this.items.push(novoItem)
      this.novoItem = ''
      this.exibirModal = false
      this.adicionar = false
    } else {
      this.itemAtualizado.nome = this.novoItem
      this.exibirModal = false
      this.novoItem = ''
    }
  }

}
