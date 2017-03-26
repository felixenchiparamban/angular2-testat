import { Component, OnInit } from '@angular/core';
import {RouterOutlet, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-welcome-nav',
  templateUrl: 'welcome-nav.component.html',
  styleUrls: ['welcome-nav.component.css']
})
export class WelcomeNavComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

  isCurrentRoute(section: string){
    return true;
    /*this.route.url === section*/
  }
}
