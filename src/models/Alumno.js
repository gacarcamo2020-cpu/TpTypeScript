"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alumno = void 0;
const Persona_js_1 = require("./Persona.js");
class Alumno extends Persona_js_1.Persona {
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
exports.Alumno = Alumno;
//# sourceMappingURL=Alumno.js.map