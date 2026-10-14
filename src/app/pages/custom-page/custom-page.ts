import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-custom-page',
  imports: [],
  templateUrl: './custom-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export default class CustomPage {

}
