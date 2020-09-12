import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtrosPageRoutingModule } from './otros-routing.module';

import { OtrosPage } from './otros.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtrosPageRoutingModule,
    ComponentesModule
  ],
  declarations: [OtrosPage]
})
export class OtrosPageModule {}
