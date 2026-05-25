import { Persona } from "./Persona";

export class Alumno extends Persona {

    carrera: string;
    materia: string;

    constructor(
        nombre: string,
        apellido: string,
        edad: number,
        fechaNacimiento: string,
        dni: number,
        carrera: string,
        materia: string
    ) {

        super(nombre, apellido, edad, fechaNacimiento, dni);

        this.carrera = carrera;
        this.materia = materia;
    }

    presentarse(): void {

        console.log(
            `Soy el alumno ${this.nombre} ${this.apellido} y estudio la materia ${this.materia}`
        );
    }
}