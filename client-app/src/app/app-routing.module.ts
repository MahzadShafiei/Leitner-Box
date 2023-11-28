import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordPracticeComponent } from './components/word-practice/word-practice.component';

const routes: Routes = [
  {
    path:'wordPractice',
    component: WordPracticeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
