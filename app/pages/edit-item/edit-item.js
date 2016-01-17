import {Page, NavController, NavParams} from 'ionic/ionic';

@Page({
  templateUrl: 'build/pages/edit-item/edit-item.html',
})

export class EditItemPage{
  constructor(nav: NavController, navParams: NavParams) {
    this.nav = nav;
    this.navParams = navParams;
    this.index = this.navParams.get('index')
    this.item = this.navParams.get('item');
  }

  updateItem (){
    if(!this.item.title && !this.item.description){
      return false;
    }
    let item = this.item;
    let index = this.index;
    this.navParams.get('listPage').updateItem(item, index);
    this.item = {
      title: '',
      description: ''
    };
    this.nav.pop();
  }
}
