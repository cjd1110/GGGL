import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'gggl',
    pathMatch: 'full',
  },
  {
    path: 'gggl',
    children: [
      {
        path: 'lol',
        loadChildren: './lol/lol.module#LolModule',
        data: {
          nav: {
            name: 'League of Legends',
            icon: '',
            value: 'lol'
          }
        }
      },
      {
        path: 'switch',
        loadChildren: './switch/switch.module#SwitchModule',
        data: {
          nav: {
            name: 'Switch',
            icon: '',
            value: 'switch'
          }
        }
      }
    ]
  }
];

export const Route: ModuleWithProviders = RouterModule.forRoot(appRoutes);
