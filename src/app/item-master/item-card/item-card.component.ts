import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../items.service';

@Component({
	selector: 'app-item-card',
	templateUrl: './item-card.component.html',
	styleUrls: [ './item-card.component.scss' ]
})
export class ItemCardComponent implements OnInit {
	@Input() item: Item;
	@Input() i: number;

	constructor() {}

	ngOnInit() {}
}
