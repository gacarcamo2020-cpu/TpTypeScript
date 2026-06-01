import { Persona } from "./Persona.js";
export class Alumno extends Persona {
    carrera;
    materia;
    constructor(nombre, apellido, edad, fechaNacimiento, dni, carrera, materia) {
        super(nombre, apellido, edad, fechaNacimiento, dni);
        this.carrera = carrera;
        this.materia = materia;
    }
    presentarse() {
        console.log(`Soy el alumno ${this.nombre} ${this.apellido} y estudio la materia ${this.materia}`);
    }
}
//# sourceMappingURL=Alumno.js.map