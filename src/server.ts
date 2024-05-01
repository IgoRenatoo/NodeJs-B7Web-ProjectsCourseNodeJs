import express, { Request, Response } from 'express';
import path from 'path';
import mustache from 'mustache-express';
import mainRoutes  from './routes/index';

const server = express();

//  Configurar o diretório onde o servidor procurará os arquivos de views para renderizar.
server.set('views', path.join(__dirname, 'views'));
//  Configurar o Mustache como o motor de renderização de views.
server.set('view engine', 'mustache');
//  Configurar o Mustache como o motor de renderização para arquivos com extensão '.mustache'.
server.engine('mustache', mustache());



//  Importa biblioteca "path" do framework express, para definir diretório absoluto.
server.use('/static', express.static(path.join(__dirname,'../public')));

server.use(mainRoutes);

server.use((req: Request, res: Response) => {
  res.status(404).render('error');
});

server.listen(3000);