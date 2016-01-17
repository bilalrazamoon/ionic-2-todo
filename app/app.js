import {App, Platform, Config} from 'ionic/ionic';

import {ListPage} from './pages/list/list';
import {DataService} from './providers/data';

@App({
  template: `
    <ion-nav [root]="root"></ion-nav>
  `,
  providers: [DataService],
  config: {}

})
export class MyApp {
  constructor(platform: Platform) {
    this.platform = platform;
    this.initializeApp();
    this.root = ListPage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('Platform ready');
    });
  }
}
