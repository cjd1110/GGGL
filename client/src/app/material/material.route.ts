import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {PracticeComponent} from './practice/practice.component';

const materialRoute: Routes = [
  {
    path: '',
    children: [
      {
        path: 'news',
        component: PracticeComponent,
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

export const MaterialRoute: ModuleWithProviders = RouterModule.forChild(materialRoute);
