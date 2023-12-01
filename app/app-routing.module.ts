import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacultyComponent } from './first/first.component';
import { StudentComponent } from './second/second.component';
import { NotFoundComponent } from './not-found/not-found.component';


StudentComponent
FacultyComponent
const routes: Routes = [{path:'fac',component:FacultyComponent},{path:'stu',component:StudentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
