import {App, Platform, StatusBar, Modal, Events} from 'ionic/ionic';

import {ListPage} from './list/list';
import {DataService} from './data/data';


@App({
  template: '<ion-nav [root]="root"></ion-nav>',
  providers: [DataService]
})

export class AppCmp {
  constructor(platform: Platform, modal: Modal) {
    this.platform = platform;
    this.initializeApp();
    this.root = ListPage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('Platform ready');
      StatusBar.setStyle(StatusBar.DEFAULT);
    });
  }
}
