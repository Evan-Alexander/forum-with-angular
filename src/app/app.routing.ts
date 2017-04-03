import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Tag } from './tag.model';
import { Post } from './post.model';
import { TagDetailComponent } from './tag-detail/tag-detail.component';
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tags/:id',
    component: TagDetailComponent

  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
