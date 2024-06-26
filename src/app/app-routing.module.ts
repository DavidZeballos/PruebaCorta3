import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberListComponent } from './_pages/member-list/member-list.component';
import { MemberFormComponent } from './_pages/member-form/member-form.component';
import { MemberEditComponent } from './_pages/member-edit/member-edit.component';

const routes: Routes = [
  {
    path: 'members',
    component: MemberListComponent,
  },
  {
    path: 'member_form',
    component: MemberFormComponent,
  },
  {
    path: 'member_edit',
    component: MemberEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
