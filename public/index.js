import { Persona } from "./models/Persona.js";
import { Profesor } from "./models/Profesor.js";
import { Alumno } from "./models/Alumno.js";
const persona1 = new Persona("Juan", "Perez", 25, "10/05/2000", 40111222);
console.log(persona1);
persona1.presentarse();
const profesor1 = new Profesor("Carlos", "Gomez", 45, "15/08/1980", 25666777, "Programación Backend");
console.log(profesor1);
profesor1.presentarse();
const alumno1 = new Alumno("Lucia", "Fernandez", 20, "22/03/2005", 45999888, "Full Stack", "TypeScript");
console.log(alumno1);
alumno1.presentarse();
//# sourceMappingURL=index.js.map