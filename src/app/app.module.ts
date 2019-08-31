import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemMasterComponent } from './item-master/item-master.component';
import { ItemCardComponent } from './item-master/item-card/item-card.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
	declarations: [
		AppComponent,
		AdminComponent,
		NavbarComponent,
		ItemDetailComponent,
		ItemMasterComponent,
		ItemCardComponent,
		PageNotFoundComponent
	],
	imports: [ BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
