import {Page, NavController, Events} from 'ionic/ionic';

import {AddItemPage} from '../add-item/add-item';
import {EditItemPage} from '../edit-item/edit-item';
import {ItemDetailPage} from '../item-detail/item-detail';
import {DataService} from '../../providers/data';

@Page({
  templateUrl: 'build/pages/list/list.html',
})

export class ListPage {
  constructor(
    nav: NavController,
    dataService: DataService,
    events: Events
    ) {
    this.nav = nav;
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
      item: item,
      listPage: this
    })
  }

  saveItem(item){
    this.items.push(item);
    this.dataService.save(item);
  }

  editItem(slidingItem, item) {
    // close the sliding item and hide the option buttons
    if(slidingItem) slidingItem.close();
    let index = this.items.indexOf(item);
    this.nav.push(EditItemPage, {
      listPage: this,
      item: item,
      index: index
    })
  }

  updateItem(item,index) {
    this.items[index] = item;
    this.dataService.update(item, index);
  }

  deleteItem(slidingItem, item){
    // close the sliding item and hide the option buttons
    if(slidingItem) slidingItem.close();
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
    this.dataService.remove(item, index)
  }
}
