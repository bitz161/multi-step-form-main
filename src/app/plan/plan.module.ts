import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectPlanComponent } from './select-plan/select-plan.component';

@NgModule({
  declarations: [SelectPlanComponent],
  imports: [CommonModule],
  exports: [SelectPlanComponent],
})
export class PlanModule {}
