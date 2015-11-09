import {Page, NavController, NavParams} from 'ionic/ionic';

@Page({
  templateUrl: './app/add-item/add-item.html',
})

export class AddItemPage{
  constructor(nav: NavController, navParams: NavParams) {
    this.nav = nav;
    this.navParams = navParams;

    this.newItem = {
      title: '',
      description: ''
    };
  }

  saveItem (){
    if(!this.newItem.title && !this.newItem.description){
      return false;
    }
    let newItem = this.newItem;
    this.navParams.get('listPage').saveItem(newItem);
    this.newItem = {
      title: '',
      description: ''
    };
    this.nav.pop();
  }
}
