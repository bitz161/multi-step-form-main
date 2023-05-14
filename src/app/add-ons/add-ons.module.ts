import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickAddonsComponent } from './pick-addons/pick-addons.component';

@NgModule({
  declarations: [PickAddonsComponent],
  imports: [CommonModule],
  exports: [PickAddonsComponent],
})
export class AddOnsModule {}
