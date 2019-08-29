import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ItemsService, Item } from '../items.service';

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: [ './admin.component.scss' ]
})
export class AdminComponent implements OnInit {
	addItemForm = this.fb.group({
		name: [ '' ],
		description: [ '' ],
		price: [],
		imageUrl: [ '' ]
	});
	items: Item[] = [];
	// valuesChangesSub: any;
	constructor(private fb: FormBuilder, private itemsService: ItemsService) {}

	ngOnInit() {
		this.getItems();
	}
	onSubmit() {
		const name = this.addItemForm.value.name;
		const description = this.addItemForm.value.description;
		const price = this.addItemForm.value.price;
		const imageUrl = this.addItemForm.value.imageUrl;

		this.itemsService.addItem(name, description, price, imageUrl);
		this.addItemForm.reset();
	}
	onDelete(item: Item) {
		this.itemsService.deleteItem(item);
		this.getItems();
	}
	getItems() {
		setTimeout(() => {
			this.items = this.itemsService.getItems();
		}, 0);
	}
}
