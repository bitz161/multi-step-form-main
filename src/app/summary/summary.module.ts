import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinishedComponent } from './finished/finished.component';

@NgModule({
  declarations: [FinishedComponent],
  imports: [CommonModule],
  exports: [FinishedComponent],
})
export class SummaryModule {}
