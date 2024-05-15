import { Injectable } from '@angular/core';
import { MediaItemResponse, MediaItem } from './media-item.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MediaItemService {
  constructor(private httpClient: HttpClient) {}

  get(medium: string) {
    const getOptions = {
      params: { medium },
    };
    return this.httpClient
      .get<MediaItemResponse>('mediaitems', getOptions)
      .pipe(
        map((response: MediaItemResponse) => response.mediaItems),
        catchError(this.handleError)
      );
  }

  add(mediaItem: MediaItem) {
    return this.httpClient
      .post('mediaitems', mediaItem)
      .pipe(catchError(this.handleError));
  }

  delete(mediaItem: MediaItem) {
    return this.httpClient
      .delete(`mediaitems/${mediaItem.id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error.message);
    return throwError(
      () => new Error('Something went wrong. Please try again later.')
    );
  }
}
