"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profesor = void 0;
const Persona_js_1 = require("./Persona.js");
class Profesor extends Persona_js_1.Persona {
    materia;
    constructor(nombre, apellido, edad, fechaNacimiento, dni, materia) {
        super(nombre, apellido, edad, fechaNacimiento, dni);
        this.materia = materia;
    }
    presentarse() {
        console.log(`Soy el profesor y dicto la materia ${this.materia}`);
    }
}
exports.Profesor = Profesor;
//# sourceMappingURL=Profesor.js.map