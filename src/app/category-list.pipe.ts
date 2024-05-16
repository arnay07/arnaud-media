import { Pipe, PipeTransform } from '@angular/core';
import { MediaItem } from './media-item.model';

@Pipe({
  name: 'categoryList',
  pure: true, // it is true by default so you can remove it if you want
})
export class CategoryListPipe implements PipeTransform {
  transform(mediaItems: MediaItem[]): string[] {
    const categories = mediaItems.map((mediaItem) => mediaItem.category);
    return Array.from(new Set(categories));
  }
}
