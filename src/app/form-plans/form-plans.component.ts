import { Component, OnInit, Input } from '@angular/core';
import { FormsService } from '../services/forms.service';

@Component({
  selector: 'app-form-plans',
  templateUrl: './form-plans.component.html',
  styleUrls: ['./form-plans.component.scss'],
})
export class FormPlansComponent implements OnInit {
  @Input() TabsID = '';

  constructor(public tabs: FormsService) {}
  ngOnInit(): void {
    this.tabs.register('personal', true);
    this.tabs.register('plan', false);
    this.tabs.register('add-ons', false);
    this.tabs.register('summary', false);

    console.log(this.tabs);

    //TODO:create a condition to check which id is currently true for visible in services
  }
}
