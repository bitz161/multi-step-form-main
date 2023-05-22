import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalComponent } from './personal/personal.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PersonalComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  exports: [PersonalComponent],
})
export class InfoModule {}
