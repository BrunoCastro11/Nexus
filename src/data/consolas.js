const CLAVE = "consolas";
import ps5 from "../assets/img/ps5ozi.webp";
import xbox from "../assets/img/xbox.webp";
import switch2 from "../assets/img/switch2.webp";

const consolasIniciales = [
  {
    id: 1,
    nombre: "Playstation 5",
    precio: 659990,
    categoria: "Sony",
    oferta: false,
    stock: 10,
    imagen: ps5,
  },
  {
    id: 2,
    nombre: "Xbox series x",
    precio: 659990,
    categoria: "Microsoft",
    oferta: true,
    stock: 8,
    imagen: xbox,
  },
  {
    id: 3,
    nombre: "Nintendo switch 2",
    precio: 549990,
    categoria: "Nintendo",
    oferta: false,
    stock: 15,
    imagen: switch2,
  },
];

function guardar(lista) {
  localStorage.setItem(CLAVE, JSON.stringify(lista));
}

export function obtenerConsolas() {
  const guardado = localStorage.getItem(CLAVE);
  if (guardado) {
    return JSON.parse(guardado);
  }
  guardar(consolasIniciales);
  return consolasIniciales;
}

export function crearConsola(nueva) {
  const lista = obtenerConsolas();
  const nuevoId = lista.length > 0 ? Math.max(...lista.map((c) => c.id)) + 1 : 1;
  const consola = { ...nueva, id: nuevoId };
  guardar([...lista, consola]);
  return consola;
}

export function actualizarConsola(id, cambios) {
  const lista = obtenerConsolas().map((c) =>
    c.id === id ? { ...c, ...cambios } : c
  );
  guardar(lista);
}

export function eliminarConsola(id) {
  const lista = obtenerConsolas().filter((c) => c.id !== id);
  guardar(lista);
}