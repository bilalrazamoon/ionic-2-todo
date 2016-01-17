import {Page, NavParams} from 'ionic/ionic'

@Page({
  templateUrl: 'build/pages/item-detail/item-detail.html',
})

export class ItemDetailPage {
  constructor(navParams: NavParams) {
  	this.navParams = navParams;
  	this.item = this.navParams.get('item');
  }

  edit() {
	  this.navParams.get('listPage').editItem(false, this.item);
  }
}
