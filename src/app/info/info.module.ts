import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalComponent } from './personal/personal.component';

@NgModule({
  declarations: [PersonalComponent],
  imports: [CommonModule],
  exports: [PersonalComponent],
})
export class InfoModule {}