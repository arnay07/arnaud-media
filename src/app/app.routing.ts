import { RouterModule, Routes } from '@angular/router';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';

const routes: Routes = [
  {
    path: 'add',
    loadChildren: () =>
      import('./media-item-form/new-item.module').then((m) => m.NewItemModule),
  },
  { path: ':medium', component: MediaItemListComponent },
  { path: '', redirectTo: 'all', pathMatch: 'full' },
];

export const routing = RouterModule.forRoot(routes);
