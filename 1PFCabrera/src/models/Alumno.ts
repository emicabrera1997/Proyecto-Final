import { Curso } from "./Curso";

export interface Alumno{
    nombre: string;
    apellido: string;
    documento: number;
    correo: string;
    telefono: number;
    legajo: number;
    curso: Curso;
    

}