import {RouterModule, Routes} from '@angular/router';
import {LolNewsComponent} from './lol-news/lol-news.component';
import {ModuleWithProviders} from '@angular/core';

const lolRoute: Routes = [
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
        component: LolNewsComponent,
        data: {
          nav: {
            name: 'News',
            icon: 'drafts',
            value: 'news'
          }
        }
      },
      {
        path: 'champion',
        component: LolNewsComponent,
        data: {
          nav: {
            name: 'Champion',
            icon: 'drafts',
            value: 'champion'
          }
        }
      },
      {
        path: 'rank',
        component: LolNewsComponent,
        data: {
          nav: {
            name: 'Rank',
            icon: 'list',
            value: 'rank'
          }
        }
      },
      {
        path: 'community',
        component: LolNewsComponent,
        data: {
          nav: {
            name: 'Community',
            icon: 'streetview',
            value: 'community'
          }
        }
      },
    ]
  }
];

export const LolRoute: ModuleWithProviders = RouterModule.forChild(lolRoute);
