import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item/media-item.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { lookupLists, lookupListToken } from './providers';
import { HttpXhrBackend, HttpClientModule } from '@angular/common/http';
import { MockXHRBackend } from './mock-xhr-backend';
import { CategoryListComponent } from './category-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    CategoryListComponent,
  ],
  imports: [BrowserModule, HttpClientModule, routing],
  providers: [
    { provide: lookupListToken, useValue: lookupLists },
    { provide: HttpXhrBackend, useClass: MockXHRBackend },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
