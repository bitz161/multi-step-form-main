import { Component, OnInit } from '@angular/core';
import { FormsService } from '../services/forms.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(public tabs: FormsService) {}
  ngOnInit(): void {}

  changeTab(event: string) {
    this.tabs.toggleTabs(event);
  }
}
