import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { CardComponent } from "../../components/card.component/card.component";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { initFlowbite } from 'flowbite';
import { interval, tap } from 'rxjs';

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

  /**
   * I18nSelectPipe :nos ayuda a obtener un valor basado en una condicion ,
   * el  I18nPluralPipe :nos ayuda a obtener un valor basado en la cantidad de elementos
   * y el SlicePipe :nos ayuda a cortar un array o string
   */

  /**
   * jsonPIpe :nos ayuda a obtener un valor en formato json y es muy util para trabajar con objetos

   * el pipeKeyValue permite iterar sobre las propiedades clave/valor de un objeto o array
   * el pipeAsync muestra el valor de una promesa o observable
   */

  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, UpperCasePipe, TitleCasePipe, KeyValuePipe, AsyncPipe],
  templateUrl: './uncommon-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export default class UncommonPage implements OnInit {

  public client = signal(client1);
  //
  ngOnInit(): void {
    initFlowbite()
  }


  //I18nSelectPipe recibe un mapa de valores que se va a utilizar 
  public intitacionMap = {
    male: 'invitarlo',
    female: 'invitarla',
  }
  //funcion que cambia el cliente
  public onChangedClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return
    }

    this.client.set(client1);

  }

  //I18nPluralPipe plural este pipe es para trabajar con diferentes cambios como pais ,genero etc

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

  //esta es para el plural  con el # se toma el valor de la propiedad que se va a evaluar
  public clientsMap = signal({
    '=0': 'en la fila de invitados',
    '=1': 'un invitado esperando',
    '=2': 'dos invitados esperando',
    other: 'tenemos # invitados esperando'

  });

  public profile = signal({
    name: 'Samarth',
    age: 22,
    email: 'samarth@gmail.com',
    addres: 'Gondia'
  });


  //AsyncPipe muestra el valor de una promesa o observable
  promisevalue: Promise<string> = new Promise((resolve, rejec) => {
    setTimeout(() => {
      resolve('tenemos un valor resuelto');
      // rejec('tenemos un error');
      console.log('llamada completada');
    }, 3000);
  });




  isHavingClients() {
    return this.clients() ? this.clients().length === 0 : false;
  }

  changedMessage() {
    return this.clients().length === 0 ? 'En la lista no hay nadie esperando' : 'En la lista ';
  }

  deleteClient() {
    this.clients.update((prev) => prev.slice(1))

  }


  myObservable = interval(2000).pipe(
    tap((value) => {
      console.log('mi observale, value:', value);
    })
  )


}
