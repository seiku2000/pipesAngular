import { ChangeDetectionStrategy, Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class NavbarComponent {


  //esto nos ayuda para poder generar la navegacion a cada componente
  routes = routes.map(route => ({
    title: route.title ?? '', //el ?? es por si acaso no tiene titulo
    path: route.path ?? '', //el ?? es por si acaso no tiene path
  }));


}
