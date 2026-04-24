import express from 'express'
import routerMenu from './routers/comidas/routerMenu.js';
const cors = require('cors');

export default function ({ modeloMenu }) {

  const app = express()

  app.use(express.json());
  app.use(cors({
    origin: 'https://localhost:3000',
    credentials: true
  }));
  app.use('/api', routerMenu({ modeloMenu }))
  const PORT = process.env.PORT ?? 4000;
  app.use('/api/uploads', express.static('public/images'))

  app.listen(PORT, () => {
    console.log(`Escuchan en el puerto ${PORT}...`);
  })
}