import {Page, NavController, Modal, Events} from 'ionic/ionic';

import {AddItemPage} from '../add-item/add-item';
import {ItemDetailPage} from '../item-detail/item-detail';
import {DataService} from '../data/data';

@Page({
  templateUrl: './app/list/list.html',
})

export class ListPage {
  constructor(
    nav: NavController,
    dataService: DataService,
    modal: Modal,
    events: Events
    ) {
    this.nav = nav;
  	this.modal = modal;
    this.dataService = dataService;

    this.items = [];
    this.dataService.getData().then((todos) => {
      this.items  = JSON.parse(todos) || [];
    })
  }

  addItem(){
  	this.nav.push(AddItemPage, {
      listPage: this
    })
  }

  viewItem(item){
  	this.nav.push(ItemDetailPage, {
      item: item
    })
  }

  saveItem(item){
    this.items.push(item);
    this.dataService.save(item);
  }
}
