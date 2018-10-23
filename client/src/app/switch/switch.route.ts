import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {SwitchNewsComponent} from './switch-news/switch-news.component';

const switchRoute: Routes = [
  {
    path: '',
    children: [
      {
        path: 'news',
        component: SwitchNewsComponent,
        data: {
          nav: {
            name: 'News',
            icon: 'drafts',
            value: 'news'
          }
        }
      }
    ]
  }
];

export const SwitchRoute: ModuleWithProviders = RouterModule.forChild(switchRoute);
