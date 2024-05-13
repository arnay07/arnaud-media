import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'arnaud-media';

  onMediaItemDelete(name: string) {
    console.log(`You have deleted ${name}`);
  }
}
