import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'mujeres',
    loadChildren: () => import('./mujeres/mujeres.module').then( m => m.MujeresPageModule)
  },
  {
    path: 'hombres',
    loadChildren: () => import('./hombres/hombres.module').then( m => m.HombresPageModule)
  },
  {
    path: 'kid',
    loadChildren: () => import('./kid/kid.module').then( m => m.KidPageModule)
  },
  {
    path: 'otros',
    loadChildren: () => import('./otros/otros.module').then( m => m.OtrosPageModule)
  },  {
    path: 'carrito',
    loadChildren: () => import('./carrito/carrito.module').then( m => m.CarritoPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
