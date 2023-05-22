import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarButtonComponent } from './sidebar-button/sidebar-button.component';
import { InputSharedComponent } from './input-shared/input-shared.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SidebarButtonComponent, InputSharedComponent],
  imports: [CommonModule],
  exports: [SidebarButtonComponent, InputSharedComponent, ReactiveFormsModule],
})
export class SharedModule {}
