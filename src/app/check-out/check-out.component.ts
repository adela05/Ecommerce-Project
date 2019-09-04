import { Component, OnInit } from '@angular/core';
import { Item } from '../items.service';
import { CartService } from '../cart.service';
import { TransactionsService } from '../transactions.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-check-out',
	templateUrl: './check-out.component.html',
	styleUrls: [ './check-out.component.scss' ]
})
export class CheckOutComponent implements OnInit {
	// represents all the items in our Cart
	items: Item[] = [];
	inforText = ''; // just some info there to show that the items were purchased

	// Included a Router as we are going to use it to redirect to items/home page
	constructor(
		private cartService: CartService,
		private transactionsService: TransactionsService,
		private router: Router
	) {}

	ngOnInit() {
		this.getItemsInCart();
	}
	getItemsInCart() {
		this.items = this.cartService.getCartItems();
	}

	// This runs on the transaction Services
	onPurchase() {
		this.transactionsService.purchaseItems(this.items).subscribe(
			(res: any) => {
				this.cartService.emptyCart();
				this.items = [];

				this.inforText = 'Items successfully purchased! Redirecting...';

				setTimeout(() => {
					this.router.navigate([ '/itmes' ]);
				}, 2500);
			},
			(err) => {
				console.log(err);
			}
		);
	}
	// on checkout -  this will Remove the items from cart after checkout.
	onDeleteItemCart(i: number) {
		this.cartService.deleteItemByIndex(i);
		this.getItemsInCart();
	}
}
