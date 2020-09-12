import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MujeresPageRoutingModule } from './mujeres-routing.module';

import { MujeresPage } from './mujeres.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MujeresPageRoutingModule,
    ComponentesModule
  ],
  declarations: [MujeresPage]
})
export class MujeresPageModule {}
