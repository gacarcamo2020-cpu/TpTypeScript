export interface IPersona<T> {

    nombre: T;
    apellido: T;
    edad: number;
    fechaNacimiento: T;
    dni: number;

    presentarse(): void;
}