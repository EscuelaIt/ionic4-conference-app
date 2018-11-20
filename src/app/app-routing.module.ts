import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'schedule',
    pathMatch: 'full'
  },
  { path: 'schedule', loadChildren: './schedule/schedule.module#SchedulePageModule' },
  { path: 'session-detail', loadChildren: './session-detail/session-detail.module#SessionDetailPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'map', loadChildren: './map/map.module#MapPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'speakers', loadChildren: './speakers/speakers.module#SpeakersPageModule' },
  { path: 'speaker-detail', loadChildren: './speaker-detail/speaker-detail.module#SpeakerDetailPageModule' },
  { path: 'tutorial', loadChildren: './tutorial/tutorial.module#TutorialPageModule' },
  { path: 'todos', loadChildren: './todos/todos.module#TodosPageModule' },
  { path: 'todos-firebase', loadChildren: './todos-firebase/todos-firebase.module#TodosFirebasePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
