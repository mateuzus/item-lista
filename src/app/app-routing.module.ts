import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './components/ItemList/ItemList.component';

const routes: Routes = [
  { path: '', redirectTo: '/listagem', pathMatch: 'full' },
  { path: 'listagem', component: ItemListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
