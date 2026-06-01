import { IPersona } from "../interfaces/IPersona.js";
export declare class Persona implements IPersona<string> {
    nombre: string;
    apellido: string;
    edad: number;
    fechaNacimiento: string;
    dni: number;
    constructor(nombre: string, apellido: string, edad: number, fechaNacimiento: string, dni: number);
    presentarse(): void;
}
//# sourceMappingURL=Persona.d.ts.map