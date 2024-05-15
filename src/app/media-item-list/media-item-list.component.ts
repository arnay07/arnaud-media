import { Component, OnInit } from '@angular/core';
import { MediaItemService } from '../media-item.service';
import { MediaItem } from '../media-item.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css'],
})
export class MediaItemListComponent implements OnInit {
  mediaItems: MediaItem[] = [];
  medium: string = '';

  constructor(
    private mediaItemService: MediaItemService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.medium = paramMap.get('medium') || 'all';
      switch (this.medium) {
        case 'all':
          this.getMediaItems('');
          break;
        case 'movies':
          this.getMediaItems('Movies');
          break;
        case 'series':
          this.getMediaItems('Series');
          break;
        default:
          this.getMediaItems('');
      }
    });
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
