import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsPage } from '../details/details.page';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'home',
    component: TabsPage,
    children: [
      {
        path: 'list',
        children: [
          {
            path: '',
            loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
          },
          {
            path: 'details',
            loadChildren: () => import('../details/details.module').then(m => m.DetailsPageModule)
          }
        ]

      },
      {
        path: 'map',
        loadChildren: () => import('../map/map.module').then(m => m.MapPageModule)
      }
      // {
      //   path: 'list',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)

      //     },
      //     {
      //       path: 'details',
      //       loadChildren: () => import('../details/details.module').then(m => m.DetailsPageModule)

      //     }
      //   ]
      // }
      ,
      {
        path: '',
        redirectTo: '/home/list',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/list',
    pathMatch: 'full'
  }
];


// const routes: Routes = [
//   {
//     path: '',
//     component: TabsPage,
//     children: [
//       {
//         path: 'home',
//         children: [
//           {
//             path: '',
//             loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)

//           },
//           {
//             path: 'details',
//             loadChildren: () => import('../details/details.module').then(m => m.DetailsPageModule)

//           }
//         ]
//       },
//       {
//         path: '**',
//         redirectTo: '/home',
        
//       }
//     ]
//   },
//   {
//     path: '',
//     redirectTo: '/home',
//     pathMatch: 'full'
//   }
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
