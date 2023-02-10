import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/models/Alumno';
import { CrudAlumnosComponent } from '../crud-alumnos/crud-alumnos.component';

@Component({
  selector: 'app-consulta-alumnos',
  templateUrl: './consulta-alumnos.component.html',
  styleUrls: ['./consulta-alumnos.component.css']
})
export class ConsultaAlumnosComponent {
  alumnos: Alumno[] = [
    { nombre: 'María Emilia',
     apellido: 'Cabrera',
     documento: 40772124,
     correo: 'm.emicabrera02@gmail.com',
     telefono: 3512726151,
     legajo: 112077,
     curso: {
       nombre: '1K1', 
       turno: 'Tarde', 
       clase: {
       nombre: 'Programación I'
       }
     }
   },
   { nombre: 'Gastón Agustín',
     apellido: 'Contreras',
     documento: 39074086,
     correo: 'gasti_contreras@hotmail.com',
     telefono: 3512726586,
     legajo: 225689,
     curso: {
       nombre: '1K1', 
       turno: 'Tarde', 
       clase: {
       nombre: 'Programación I'
       }
     }
   },
   { nombre: 'Jessica',
     apellido: 'Lopez',
     documento: 32568458,
     correo: 'jessiLopez@gmail.com',
     telefono: 351286988,
     legajo: 225533,
     curso: {
       nombre: '1K2', 
       turno: 'Mañana', 
       clase: {
       nombre: 'Estadisticas I'
       }
     }
   },
   { nombre: 'Alejandra Trinidad',
     apellido: 'Gimenez',
     documento: 12568963,
     correo: 'trinidadGimenez@gmail.com',
     telefono: 3512568963,
     legajo: 52689,
     curso: {
       nombre: '2K1', 
       turno: 'Tarde', 
       clase: {
       nombre: 'Programación II'
       }
     }
   },
   { nombre: 'Priscila ',
     apellido: 'Frias',
     documento: 25669356,
     correo: 'priscilaFrias@gmail.com',
     telefono: 352689654,
     legajo: 23562,
     curso: {
       nombre: '1K1', 
       turno: 'Tarde', 
       clase: {
       nombre: 'Programación I'
       }
     }
   }
   ];
 
 
   dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>(this.alumnos);
 
   col: string[] = ['Legajo','Nombre y Apellido','Clase','Curso','Turno','Acciones'];
 
   constructor(private dialog: MatDialog){
 
   }
 
   abrirFormAlumno(){
     const dialogRef = this.dialog.open(CrudAlumnosComponent,{data:null})
   }
 
   editarAlumno(alumno: Alumno){
     const dialogRef = this.dialog.open(CrudAlumnosComponent,{data:alumno})
   }

}
