import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { ProfileComponent } from './component/profile/profile.component';

const appRoute: Routes = [
   {
        path: '',
        component: HomeComponent
   },
   {
       path: 'profile',
       component: ProfileComponent
   }
    
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoute);