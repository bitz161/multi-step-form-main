import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarButtonComponent } from './sidebar-button/sidebar-button.component';

@NgModule({
  declarations: [SidebarButtonComponent],
  imports: [CommonModule],
  exports: [SidebarButtonComponent],
})
export class SharedModule {}
