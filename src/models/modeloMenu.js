import modeloMenuJson from "./modeloMenu.json" with { type: "json" };

export default class {

  static getPlatosPrincipales = async () => {
    const numTop = 5;
    const top5 = modeloMenuJson.toSorted((a, b) => b.num_estrellas - a.num_estrellas).slice(0, numTop)
    const top5Resumen = top5.map(p => ({
      id: p.id,
      nombre_local: p.nombre_local,
      nombre_plato: p.nombre_plato,
      num_estrellas: p.num_estrellas,
      num_reviews: p.num_reviews,
      tiempo_preparacion: p.tiempo_preparacion,
      url_imagen: p.url_imagen
    }))
    return top5Resumen;
  }

  static getPlatosCategoria = async ({ tipo }) => {
    const platosCategoria = modeloMenuJson.filter((p) => (p.nombre_comida?.toLowerCase() == tipo?.trim().toLowerCase()))
    const platosCategoriaMenu = platosCategoria.map(p => ({
      id: p.id,
      nombre_local: p.nombre_local,
      nombre_plato: p.nombre_plato,
      nombre_comida: p.nombre_comida,
      num_estrellas: p.num_estrellas,
      num_reviews: p.num_reviews,
      tiempo_preparacion: p.tiempo_preparacion,
      descripcion: p.descripcion,
      url_imagen: p.url_imagen
    }))
    return platosCategoriaMenu;
  }

  static getPlatoID = async ({ id }) => {
    const platoID = modeloMenuJson.find(p => p.id == id)
    return platoID;
  }

} 