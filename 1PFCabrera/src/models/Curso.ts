import { Clase } from "./Clase";

export interface Curso {
    nombre: string;
    turno: string;
    clase?: Clase;
}