
export default class ControladorMenu {

  constructor({ modeloMenu }) {
    this.modeloMenu = modeloMenu;
  }

  getPlatosPrincipales = async (req, res) => {
    const platosPrincipales = await this.modeloMenu.getPlatosPrincipales();
    res.json(platosPrincipales)
  }

  getPlatosCategoria = async (req, res) => {
    const { tipo } = req.query;

    const platosCategorias = await this.modeloMenu.getPlatosCategoria({ tipo });
    console.log(tipo)
    res.json(platosCategorias)
  }

  getPlatoID = async (req, res) => {
    const { id } = req.params;
    const platoId = await this.modeloMenu.getPlatoID({ id });
    res.json(platoId);
  }
}