import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from 'src/models/Alumno';

@Pipe({
  name: 'nya'
})
export class NyaPipe implements PipeTransform {

  transform(alumno: Alumno): string {
    return alumno.nombre + " " + alumno.apellido; 
  }

}
