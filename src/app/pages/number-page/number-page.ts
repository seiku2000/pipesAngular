import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-number-page',
  /**
   * 1. El DecimalPipe es para formatear numeros
   * 2. El PercentPipe es para formatear porcentajes
   * 3. El CurrencyPipe es para formatear monedas
   */
  imports: [DecimalPipe, PercentPipe, CurrencyPipe],
  templateUrl: './number-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export default class NumberPage {


  totalSells = signal(33_232_323.56565);
  porcentaje = signal(0.4856);
}
