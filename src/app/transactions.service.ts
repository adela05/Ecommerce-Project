import { Injectable } from '@angular/core';
import { Item } from './items.service';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class TransactionsService {
	constructor() {}

	// we are mocking an api. Not calling an api - this return it as an observable.
	purchaseItems(items: Item[]): Observable<Item[]> {
		return of(items);
	}
}
