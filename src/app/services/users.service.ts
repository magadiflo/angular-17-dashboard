import { Injectable, signal } from '@angular/core';

import { User } from '../interfaces/req-response';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  //#, el numeral hace a la variable privada
  //es lo mismo que poner el private, con la diferencia de que private es para TypeScript
  //mientras que #, es para cuando se haga la transpilación y en el ecmascript diga que sí o sí es privado.
  //En resumen, es ideal colocar el #
  #state = signal<State>({ users: [], loading: true });

  constructor() {
    console.log('Cargando data...');
  }
}
