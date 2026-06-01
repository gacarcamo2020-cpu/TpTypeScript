export class Persona {
    nombre;
    apellido;
    edad;
    fechaNacimiento;
    dni;
    constructor(nombre, apellido, edad, fechaNacimiento, dni) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.fechaNacimiento = fechaNacimiento;
        this.dni = dni;
    }
    presentarse() {
        console.log(`Hola soy ${this.nombre} y nací el ${this.fechaNacimiento}`);
    }
}
//# sourceMappingURL=Persona.js.map