import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module1ComponentComponent } from './module1-component/module1-component.component';
import {Module1RoutingModule} from './module1-routing.module'
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  imports: [
    CommonModule,
    Module1RoutingModule,
    NgCircleProgressModule
  ],
  declarations: [Module1ComponentComponent],
})
export class Module1Module { }