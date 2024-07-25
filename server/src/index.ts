import express, { Application } from 'express'; 
import cors from 'cors';
import morgan from 'morgan';
import bebidasRoutes from './routes/bebidasRoutes';
//import fileUploadRoutes from './routes/fileUploadRoutes';
import path from 'path';

const app = express();
class Server{
    public app: Application = express();
       constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(express.json()); //recibo peticiones de las aplicaciones-cliente en formato json
        this.app.use(cors()); //Angular podra pedir los datos al servidor
        this.app.use(morgan("dev")); //me permite ver en consola lo que los clientes estan haciendo
        this.app.use((req, res, next) => {
            console.log(`Ruta cargada: ${req.method} ${req.url}`);
            next();
        });
        // Servir archivos estáticos desde la carpeta
        this.app.use('/img', express.static(path.resolve('img'))); 
    }

    routes(): void{
        this.app.use('/api/bebidas', bebidasRoutes);
        //this.app.use('/api/bebidas/id:', bebidasRoutes)
    }

    start(): void{
        this.app.listen(this.app.get('port'), () => {
            console.log("El servidor esta en funcionamiento, servidor:", this.app.get('port'));
        })
    }
}

const server = new Server();
server.start();
