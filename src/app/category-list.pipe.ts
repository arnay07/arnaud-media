import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryList',
  pure: true, // it is true by default so you can remove it if you want
})
export class CategoryListPipe implements PipeTransform {
  transform(mediaItems: any[]): string {
    const categories = mediaItems.map((mediaItem) => mediaItem.category);
    const uniqueCategories = Array.from(new Set(categories));
    return uniqueCategories.join(', ');
  }
}
