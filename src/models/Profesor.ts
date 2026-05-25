import { Persona } from "./Persona";

export class Profesor extends Persona {

    materia: string;

    constructor(
        nombre: string,
        apellido: string,
        edad: number,
        fechaNacimiento: string,
        dni: number,
        materia: string
    ) {

        super(nombre, apellido, edad, fechaNacimiento, dni);

        this.materia = materia;
    }

    presentarse(): void {

        console.log(
            `Soy el profesor y dicto la materia ${this.materia}`
        );
    }
}