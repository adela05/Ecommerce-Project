import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-page-not-found',
	templateUrl: './page-not-found.component.html',
	styleUrls: [ './page-not-found.component.scss' ]
})
export class PageNotFoundComponent implements OnInit {
	image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/A_view_of_Mont_Blanc_from_the_Tour_du_Mont_Blanc%2C_2007.jpg/220px-A_view_of_Mont_Blanc_from_the_Tour_du_Mont_Blanc%2C_2007.jpg';
	constructor() {}

	ngOnInit() {}
}
