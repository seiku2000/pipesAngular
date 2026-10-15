import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { languageOptions, LocaleService } from '../../services/local.service';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.html',
})
export default class BasicPage {
  localService = inject(LocaleService);
  currentLocalService = signal(inject(LOCALE_ID));



  nameLower = signal('sma');
  nameUpper = signal('SMA');
  fullname = signal('SmA RcZ');

  customDate = signal(new Date());

  dateChanged = effect((onCleanup) => {
    const intervale = setInterval(() => {
      this.customDate.set(new Date());
      console.log('tick')
    }, 1000);
    //esto muy importante para liberar memoria o no generar fugas de memoria
    onCleanup(() => {
      clearInterval(intervale);
      console.log('Intervalo limpiado');
    })

  })

  public changedLocal(local: languageOptions) {
    console.log(local);
    this.localService.changeLocal(local);
  }

}
