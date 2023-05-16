import { Component, OnInit } from '@angular/core';
import { FormsService } from 'src/app/services/forms.service';

@Component({
  selector: 'app-finished',
  templateUrl: './finished.component.html',
  styleUrls: ['./finished.component.scss'],
})
export class FinishedComponent implements OnInit {
  constructor(public tabs: FormsService) {}
  ngOnInit(): void {}

  changeTab(event: string) {
    this.tabs.toggleTabs(event);
  }
}
