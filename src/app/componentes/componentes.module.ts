import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { IonicModule } from '@ionic/angular';
import { CarritoPageRoutingModule } from '../home/carrito/carrito-routing.module';





@NgModule({
  declarations: [
    EncabezadoComponent
  ],
  exports: [
    EncabezadoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    CarritoPageRoutingModule
   
   
  ]
})
export class ComponentesModule { }
