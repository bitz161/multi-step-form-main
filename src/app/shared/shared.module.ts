import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarButtonComponent } from './sidebar-button/sidebar-button.component';
import { InputSharedComponent } from './input-shared/input-shared.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideEnvironmentNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [SidebarButtonComponent, InputSharedComponent],
  imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective],
  exports: [SidebarButtonComponent, InputSharedComponent],
  providers: [provideEnvironmentNgxMask()],
})
export class SharedModule {}
