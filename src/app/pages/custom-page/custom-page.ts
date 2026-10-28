import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { ToogleCasePipe } from '../../pipes/toogle-case.pipe';
import { initFlowbite } from 'flowbite';
import { heroes } from '../../data/hero.data';

@Component({
  selector: 'app-custom-page',
  imports: [ToogleCasePipe],
  templateUrl: './custom-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export default class CustomPage implements OnInit {
  public name = signal('sma rcz');
  public isUpperCase = signal(true);

  ngOnInit(): void {
    initFlowbite();
  }

  onChangedName() {
    this.isUpperCase.update(value => !value);
  }


  public hero = signal(heroes)

}
