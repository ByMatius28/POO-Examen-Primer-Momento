import { NaveEspacial } from "./spaceships";
import { Planeta, TipoRecurso } from "./planet";
import { Evento } from "./event";
import * as Funcionalidades from "./functionalities";


const nave: NaveEspacial = { salud: 100, capacidadCarga: 50, velocidad: 10 };
const planeta1 = new Planeta("Saturno", TipoRecurso.Mineral, false);
const evento1: Evento = { nombre: "Tormenta de asteroides", afectaSalud: true, afectaCarga: false };


Funcionalidades.explorar("norte");
Funcionalidades.recolectarRecursos<number>(planeta1, 10);
Funcionalidades.manejarEvento(evento1);

console.log(planeta1);
console.log(evento1);
console.log(nave);

