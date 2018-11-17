import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {Ps4NewsComponent} from './ps4-news/ps4-news.component';

const ps4Route: Routes = [
  {
    path: '',
    redirectTo: 'news',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: 'news',
        component: Ps4NewsComponent,
        data: {
          nav: {
            name: 'News',
            icon: 'drafts',
            value: 'news'
          }
        }
      },
    ]
  }
];

export const Ps4Route: ModuleWithProviders = RouterModule.forChild(ps4Route);
