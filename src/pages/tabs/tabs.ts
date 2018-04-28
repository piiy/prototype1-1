import { Component } from '@angular/core';

/* Change these to change the pages in the tabcontroller*/
import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
/*import { VenuePage } from '../tabs/tabs';*/

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage; /*Change to change first page, I think */
  tab2Root = AboutPage;

  constructor() {

  }
}
