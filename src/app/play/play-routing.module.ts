import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayPage } from './play.page';

const routes: Routes = [
  {
    path: 'game',
    component: PlayPage,
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full',
  },
  {
    path: 'start',
    loadChildren: () =>
      import('./start/start.module').then((m) => m.StartPageModule),
  },
  {
    path: 'finish',
    loadChildren: () => import('./finish/finish.module').then( m => m.FinishPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayPageRoutingModule {}
