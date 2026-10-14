import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.html',
})
export default class BasicPage {


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



}
