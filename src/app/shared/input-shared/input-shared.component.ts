import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-shared',
  templateUrl: './input-shared.component.html',
  styleUrls: ['./input-shared.component.scss'],
})
export class InputSharedComponent implements OnInit {
  @Input() placeholder = '';
  @Input() inputLabel = '';
  @Input() control: FormControl = new FormControl();

  constructor() {}
  ngOnInit(): void {}
}
