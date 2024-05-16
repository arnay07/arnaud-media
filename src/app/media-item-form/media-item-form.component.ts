import { Component, OnInit, Inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { MediaItemService } from '../media-item.service';
import { lookupListToken } from '../providers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css'],
})
export class MediaItemFormComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private mediaItemService: MediaItemService,
    @Inject(lookupListToken) public lookupLists: any,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      medium: this.formBuilder.control('Movies'),
      name: this.formBuilder.control(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[\\w\\-\\s\\/]+'),
        ])
      ),
      category: this.formBuilder.control(''),
      year: this.formBuilder.control('', this.yearValidator),
    });
  }

  yearValidator(control: AbstractControl) {
    if (control.value.trim().length === 0) {
      return null;
    }
    const year = parseInt(control.value, 10);
    const minYear = 1900;
    const maxYear = 2100;
    if (year >= minYear && year <= maxYear) {
      return null;
    }
    return {
      year: {
        min: minYear,
        max: maxYear,
      },
    };
  }

  onSubmit(mediaItem: any) {
    console.log(mediaItem);
    this.mediaItemService.add(mediaItem).subscribe(() => {
      this.router.navigate(['/', mediaItem.medium.toLowerCase()]);
    });
  }
}
