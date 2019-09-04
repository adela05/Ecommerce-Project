import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';
import { Item } from '../items.service';
@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: [ './button.component.scss' ]
})
export class ButtonComponent implements OnInit {
	// @Input()-- everytime we call it we pass the item we are referncing
	@Input() item: Item;
	buttonTitle = 'Add to cart'; //Setting to add to the cart

	constructor(private cartService: CartService) {}

	ngOnInit() {}

	// onAdd-- going to call the item from cartService and passing in the item.
	onAddToCart(item: Item) {
		this.cartService.addToCart(item);
		this.buttonTitle = 'Added!'; // this will change the text on the button after you clicked onAdd.

		setTimeout(() => {
			this.buttonTitle = 'Add to cart';
		}, 2500);
	}
}
