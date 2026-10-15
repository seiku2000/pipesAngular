import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card.component/card.component";
import { I18nSelectPipe } from '@angular/common';


const client1 = {
  name: 'sma',
  gender: 'male',
  age: '30',
  addres: 'los angeles , usa'

}

const client2 = {
  name: 'valeria',
  gender: 'female',
  age: '28',
  addres: 'mexico , df'
}

@Component({
  selector: 'app-uncommon-page',
  //el i18nSelect es para trabajar con diferentes cambios como pais ,genero etc
  //El  I18nSelectPipe es para mostrar un mensaje basado en una condicion 

  imports: [CardComponent, I18nSelectPipe],
  templateUrl: './uncommon-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export default class UncommonPage {

  public client = signal(client1);

  public intitacionMap = {
    male: 'invitarlo',
    female: 'invitarla',
  }

  public onChangedClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return
    }

    this.client.set(client1);

  }



}
