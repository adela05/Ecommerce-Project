import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ItemsService, Item } from '../items.service';

@Component({
	selector: 'app-item-detail',
	templateUrl: './item-detail.component.html',
	styleUrls: [ './item-detail.component.scss' ]
})
export class ItemDetailComponent implements OnInit {
	paramsSub: Subscription;
	itemByIdSub: Subscription;
	item: Item; //this will hold the value for ngOnInit()
	constructor(private route: ActivatedRoute, private itemsService: ItemsService) {}

	ngOnInit() {
		this.paramsSub = this.route.paramMap.subscribe((paramMap: ParamMap) => {
			console.log('paramMap itemIndex:' + paramMap.get('itemIndex'));
			const itemIndex = +paramMap.get('itemIndex');
			// this.item = this.itemsService.getItemByIndex(itemIndex); //the line came from items-service
			this.getItemFromServer(itemIndex);
		});
	}
	ngOnDestroy() {
		if (this.paramsSub) {
			this.paramsSub.unsubscribe();
		}
		if (this.itemByIdSub) {
			this.itemByIdSub.unsubscribe();
		}
	}
	getItemFromServer(itemId: number) {
		this.itemByIdSub = this.itemsService.getItemByIdFromServer(itemId).subscribe(
			(res: Item) => {
				console.log('res' + res);
				this.item = res;
			},
			(err) => {
				console.log(err);
			}
		);
	}
}
