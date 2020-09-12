import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KidPageRoutingModule } from './kid-routing.module';

import { KidPage } from './kid.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KidPageRoutingModule,
    ComponentesModule
  ],
  declarations: [KidPage]
})
export class KidPageModule {}
