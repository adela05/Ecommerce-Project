import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './items.service';

@Pipe({
	name: 'itemSearch'
})
export class ItemSearchPipe implements PipeTransform {
	// More like a search engine - Searches by name and description
	transform(value: Item[], filterText: string): Item[] {
		let matchingText = value.filter((item: Item) => {
			if (item.name && item.name.toLowerCase().includes(filterText.toLowerCase())) {
				return true;
			}
			if (item.description && item.description.toLowerCase().includes(filterText.toLowerCase())) {
				return true;
			}
			return false;
		});
		return matchingText;
	}
}
