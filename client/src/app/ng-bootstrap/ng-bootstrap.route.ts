import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {PracticeComponent} from './practice/practice.component';

const ngBootstrapRoute: Routes = [
  {
    path: '',
    children: [
      {
        path: 'practice',
        component: PracticeComponent,
        data: {
          nav: {
            name: 'Practice',
            icon: 'drafts',
            value: 'news'
          }
        }
      }
    ]
  }
];

export const NgBootstrapRoute: ModuleWithProviders = RouterModule.forChild(ngBootstrapRoute);
