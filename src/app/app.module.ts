import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormPlansComponent } from './form-plans/form-plans.component';
import { AddOnsModule } from './add-ons/add-ons.module';
import { InfoModule } from './info/info.module';
import { PlanModule } from './plan/plan.module';
import { SummaryModule } from './summary/summary.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, FormPlansComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AddOnsModule,
    InfoModule,
    PlanModule,
    SummaryModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
