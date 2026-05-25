import { IPersona } from "../interfaces/IPersona";

export class Persona implements IPersona<string> {

    nombre: string;
    apellido: string;
    edad: number;
    fechaNacimiento: string;
    dni: number;

    constructor(
        nombre: string,
        apellido: string,
        edad: number,
        fechaNacimiento: string,
        dni: number
    ) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.fechaNacimiento = fechaNacimiento;
        this.dni = dni;
    }

    presentarse(): void {

        console.log(
            `Hola soy ${this.nombre} y nací el ${this.fechaNacimiento}`
        );
    }
}