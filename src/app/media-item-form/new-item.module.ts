import { NgModule } from '@angular/core';
import { MediaItemFormComponent } from './media-item-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { newItemRouting } from './new-item.routing';

@NgModule({
  declarations: [MediaItemFormComponent],
  imports: [CommonModule, ReactiveFormsModule, newItemRouting],
})
export class NewItemModule {}
