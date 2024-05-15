import { Component, OnInit } from '@angular/core';
import { MediaItemService } from '../media-item.service';
import { MediaItem } from '../media-item.model';

@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css'],
})
export class MediaItemListComponent implements OnInit {
  mediaItems: MediaItem[] = [];
  medium: string = '';

  constructor(private mediaItemService: MediaItemService) {}

  ngOnInit(): void {
    this.getMediaItems(this.medium);
  }

  onMediaItemDelete(mediaItem: any) {
    this.mediaItemService.delete(mediaItem).subscribe(() => {
      this.getMediaItems(this.medium);
    });
  }

  getMediaItems(medium: string) {
    this.medium = medium;
    this.mediaItemService.get(this.medium).subscribe((mediaItems) => {
      this.mediaItems = mediaItems;
    });
  }
}
