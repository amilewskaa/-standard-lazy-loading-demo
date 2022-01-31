import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module2Component } from './module-2.component';
import { Module2RoutingModule } from './module-2-routing.module';
import { CardModule } from '../shared/card/card.module';

@NgModule({
  declarations: [Module2Component],
  imports: [CommonModule, Module2RoutingModule, CardModule],
})
export class Module2Module {}
