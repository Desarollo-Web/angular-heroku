import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
//https://angular.io/guide/form-validation

@Injectable({
  providedIn: 'root'
})
export class ValidaFormService {

  constructor() { }

  /*
    Método para validación de la función
  */
  isValidField(form: AbstractControl|null) {
    let flag = false;

    if (form != null) {
      flag = form.touched || form.dirty && !form.valid
    }
    return flag;
  }

  /*
    Método que traduce el error predefinido en inglés a español
  */
  getErrorMessage(form:AbstractControl|null) {
    let mensaje = '';

    if (form) {
      const {errors} = form;

      if(errors) {
        const mensajes:any = {
          required: 'Campo requerido',
          email: 'Correo Electrónico Incorrecto',
          pattern: 'Formato Incorrecto',
          minError: 'El rango no es correcto',
          min: 'Valor mínimo incorrecto',
          max: 'Valor máximo incorrecto'
        }

        const errorKey = Object.keys(errors).find(Boolean);
        if(errorKey) {
          mensaje = mensajes[errorKey];
        }
      }
    }
    return mensaje;
  }
}
