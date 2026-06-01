import { Persona } from "./Persona.js";
export class Profesor extends Persona {
    materia;
    constructor(nombre, apellido, edad, fechaNacimiento, dni, materia) {
        super(nombre, apellido, edad, fechaNacimiento, dni);
        this.materia = materia;
    }
    presentarse() {
        console.log(`Soy el profesor y dicto la materia ${this.materia}`);
    }
}
//# sourceMappingURL=Profesor.js.map