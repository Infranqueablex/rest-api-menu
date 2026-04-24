import express from 'express'
import ControladorMenu from '../../controllers/ControladorMenu.js';

export default function ({ modeloMenu }) {

  const routerMenu = express.Router();
  const controladorMenu = new ControladorMenu({ modeloMenu })

  routerMenu.get('/', controladorMenu.getPlatosPrincipales)

  routerMenu.get('/categoria', controladorMenu.getPlatosCategoria)

  routerMenu.get('/plato/:id', controladorMenu.getPlatoID)
  return routerMenu;
}