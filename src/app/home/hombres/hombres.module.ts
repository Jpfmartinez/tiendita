import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HombresPageRoutingModule } from './hombres-routing.module';

import { HombresPage } from './hombres.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HombresPageRoutingModule,
    ComponentesModule
  ],
  declarations: [HombresPage]
})
export class HombresPageModule {}
