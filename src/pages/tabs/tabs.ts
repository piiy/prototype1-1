import { Component } from '@angular/core';

/* Change these to change the pages in the tabcontroller*/
import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { VenuePage } from '../venue/venue';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = VenuePage; /*Change to change first page, I think */
  tab2Root = AboutPage;

  constructor() {

  }
}
