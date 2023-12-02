import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from "@angular/core/rxjs-interop";
import { switchMap } from 'rxjs';

import { TitleComponent } from '@shared/title/title.component';
import { UsersService } from '@services/users.service';
import { User } from '../../../interfaces/req-response';

@Component({
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './user.component.html',
  styles: ``
})
export default class UserComponent {

  private userService = inject(UsersService);
  private activatedRoute = inject(ActivatedRoute);

  // Convertimos un observable a signal. En este ejemplo recibimos por parámetro el id del usuario
  // luego realizamos una petición para obtener los datos del usuario a través del id proporcionado
  public user = toSignal(
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.userService.getUserById(id))
      )
  );
}
