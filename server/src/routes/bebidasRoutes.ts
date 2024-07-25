import bebidasControllers from "../controllers/bebidasControllers";
import { Router } from "express";

class BebidasRoutes{
    public router: Router = Router()
    // const multer = require('multer');
    constructor(){
        this.config();
        this.router;
    }

    config(): void{
        this.router.get('/', bebidasControllers.list);
        this.router.get('/:id',bebidasControllers.listOne);
        this.router.post('/',bebidasControllers.create);
        this.router.delete('/:id',bebidasControllers.delete);
        this.router.put('/:id',bebidasControllers.update);
    }
}

const bebidasRoutes = new BebidasRoutes();
export default bebidasRoutes.router;