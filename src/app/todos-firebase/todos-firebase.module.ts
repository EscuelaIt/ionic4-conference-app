import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TodosFirebasePage } from './todos-firebase.page';

const routes: Routes = [
  {
    path: '',
    component: TodosFirebasePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TodosFirebasePage]
})
export class TodosFirebasePageModule {}
