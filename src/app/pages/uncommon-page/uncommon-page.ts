import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card.component/card.component";
import { I18nPluralPipe, I18nSelectPipe } from '@angular/common';


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

  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe],
  templateUrl: './uncommon-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export default class UncommonPage {

  public client = signal(client1);


  //I18nSelectPipe recibe un mapa de valores que se va a utilizar 
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

  //I18nPluralPipe plural

  public clients = signal([
    'maria',
    'sara',
    'lucas',
    'pedro',
    'juan',
    'ana',
    'luis',
    'Andrea',
    'Marcos',
  ]);

  //esta es para el plural 
  public clientsMap = signal({
    '=0': 'en la fila de invitados',
    '=1': 'un invitado esperando',
    '=2': 'dos invitados esperando',
    other: 'tenemos # invitados esperando'

  })




  isHavingClients() {
    return this.clients() ? this.clients().length === 0 : false;
  }

  changedMessage() {
    return this.clients().length === 0 ? 'En la lista no hay nadie esperando' : 'En la lista ';
  }

  deleteClient() {
    this.clients.update((prev) => prev.slice(1))

  }


}
