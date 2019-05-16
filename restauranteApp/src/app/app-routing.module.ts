import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'pratos', loadChildren: './pages/pratos/pratos.module#PratosPageModule' },
  { path: 'lanches', loadChildren: './pages/lanches/lanches.module#LanchesPageModule' },
  { path: 'bebidas', loadChildren: './pages/bebidas/bebidas.module#BebidasPageModule' },
  { path: 'sobremesas', loadChildren: './pages/sobremesas/sobremesas.module#SobremesasPageModule' },
  { path: 'ofertas', loadChildren: './pages/ofertas/ofertas.module#OfertasPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
