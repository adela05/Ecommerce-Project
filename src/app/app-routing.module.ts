import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemMasterComponent } from './item-master/item-master.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

// Routes - navigates to each component as pages
const routes: Routes = [
	{ path: 'items', component: ItemMasterComponent }, // this path lists all items on page
	{ path: 'admin', component: AdminComponent },
	{ path: 'items/:itemIndex', component: ItemDetailComponent }, //this path lists one individual item on the page

	{ path: '', redirectTo: 'items', pathMatch: 'full' }, // this path is kinda of the landing page
	{ path: '**', component: PageNotFoundComponent } // 404-Page should always be at the bottom of these route path
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
