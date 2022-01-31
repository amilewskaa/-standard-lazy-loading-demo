import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module1Component } from './module-1.component';
import { CardModule } from '../shared/card/card.module';

@NgModule({
  declarations: [Module1Component],
  imports: [CommonModule, CardModule],
})
export class Module1Module {}
