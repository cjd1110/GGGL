import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {PracticeComponent} from './practice/practice.component';

const materialRoute: Routes = [
  {
    path: '',
    redirectTo: 'practice',
    pathMatch: 'full'
  },
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

export const MaterialRoute: ModuleWithProviders = RouterModule.forChild(materialRoute);
