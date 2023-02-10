import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumno } from 'src/models/Alumno';
import { Clase } from 'src/models/Clase';
import { Curso } from 'src/models/Curso';

@Component({
  selector: 'app-crud-alumnos',
  templateUrl: './crud-alumnos.component.html',
  styleUrls: ['./crud-alumnos.component.css']
})
export class CrudAlumnosComponent {

  formAlumnos: FormGroup;

  constructor(private dialogRef: MatDialogRef<CrudAlumnosComponent>, @Inject(MAT_DIALOG_DATA) public data: Alumno){
    let controles: any = {
      nombre: new FormControl('',[Validators.required]),
      apellido: new FormControl('',[Validators.required]),
      documento: new FormControl('',[Validators.required]),
      telefono: new FormControl('',[Validators.required]),
      correoElectronico: new FormControl('',[Validators.required]),
      legajo: new FormControl('',[Validators.required]),
      curso: new FormControl('',[Validators.required]),
      clase: new FormControl('',[Validators.required])
    }

    this.formAlumnos = new FormGroup(controles);

    

    
  }


  guardar(){
    console.log(this.formAlumnos);

    if(this.formAlumnos.controls['nombre'].errors?.['required']){
      console.log("El nombre es obligatorio");
    }
  }

  

  cursos: Curso[] = [
    {
    nombre: '1k1',
    turno : 'Tarde'
  },
  {
    nombre: '1k2',
    turno: 'Mañana',
  },
  {
    nombre: '2k2',
    turno: 'Tarde'
  }
]

  clases: Clase[] = [
    {
      nombre: 'Programación I'
    },
    {
      nombre: 'Estadisticas'
    },
    {
      nombre: 'Ingles I'
    }
  ]

}
