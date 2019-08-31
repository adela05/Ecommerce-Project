import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ItemsService, Item } from '../items.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: [ './admin.component.scss' ]
})
export class AdminComponent implements OnInit, OnDestroy {
	addItemForm = this.fb.group({
		name: [ '' ],
		description: [ '' ],
		price: [],
		imageUrl: [ '' ]
	});
	items: Item[] = [];
	itemsSub: Subscription;
	submitSub: Subscription;
	deleteSub: Subscription;
	editingItemId: number;
	editSub: Subscription;
	// valuesChangesSub: any;
	constructor(private fb: FormBuilder, private itemsService: ItemsService) {}

	ngOnInit() {
		//this.getItems();
		this.getItemsFromServer();
	}
	ngOnDestroy() {
		if (this.itemsSub) {
			this.itemsSub.unsubscribe();
		}
		if (this.submitSub) {
			this.submitSub.unsubscribe();
		}
		if (this.deleteSub) {
			this.deleteSub.unsubscribe();
		}
		if (this.editSub) {
			this.editSub.unsubscribe();
		}
	}
	onSubmit() {
		const name = this.addItemForm.value.name;
		const description = this.addItemForm.value.description;
		const price = this.addItemForm.value.price;
		const imageUrl = this.addItemForm.value.imageUrl;
		//adding a new item
		if (this.editingItemId == undefined) {
			this.submitSub = this.itemsService.createNewItemOnServer(name, description, price, imageUrl).subscribe(
				(res: Item) => {
					console.log('res' + res);
					this.getItemsFromServer();
					this.addItemForm.reset();
				},
				(err) => {
					console.log(err);
				}
			);
		} else {
			this.editSub = this.itemsService
				.updateItemOnServer(this.editingItemId, name, description, price, imageUrl)
				.subscribe(
					(res: Item) => {
						this.editingItemId = undefined;
						this.addItemForm.reset();

						this.getItemsFromServer();
					},
					(err) => {
						console.log(err);
					}
				);
		}

		//this.itemsService.addItem(name, description, price, imageUrl);
	}
	onDelete(item: Item) {
		// this.itemsService.deleteItem(item);
		// this.getItems();
		this.deleteSub = this.itemsService.deleteItemByIdServer(item.id).subscribe(
			(res: any) => {
				this.getItemsFromServer();
			},
			(err) => {
				console.log(err);
			}
		);
	}
	getItems() {
		setTimeout(() => {
			this.items = this.itemsService.getItems();
		}, 0);
	}
	getItemsFromServer() {
		this.itemsSub = this.itemsService.getItemsFromServer().subscribe(
			(res: Item[]) => {
				console.log('res:' + res);
				this.items = res;
			},
			(err) => {
				console.log('err:' + err);
			}
		);
	}
	onStartEditItem(item: Item) {
		this.editingItemId = item.id;
		this.addItemForm.patchValue(item); // The new update gets added to the form
	}
	onCancelEditItem() {
		this.editingItemId = undefined;
		this.addItemForm.reset();
	}
}
