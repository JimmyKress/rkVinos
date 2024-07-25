import  pool  from "../database";
import { Request, Response, text } from "express";
//Creo las peticiones

class BebidasControllers{
    public async list(req: Request, res: Response): Promise<void> {
        try { 
          const [rows] = await pool.query('SELECT * FROM bebidas');
          console.log("Mostrar tabla", rows);
          res.json(rows);
        } catch (error) {
          console.log("Error al mostrar la tabla");
          res.status(500).json({ error: 'Error al mostrar la tabla' });
        }
      }

    public async listOne(req: Request, res: Response): Promise<void> {
        try { 
            const { id } = req.params;
            const [rows] = await pool.query('SELECT * FROM bebidas WHERE id = ?', [id]);
            console.log("Estos son los datos de la fila: ", rows);
            res.json(rows);
        } catch (error) {
            console.log("Error al mostrar la fila");
            res.status(500).json({ error: 'Error al mostrar la fila' });
        }
    }

    public async create(req: Request, res: Response): Promise<void> {
        try { 
            await pool.query('INSERT INTO bebidas SET ?', [req.body]);
            console.log("Se agrego una nueva fila a la tabla");
            res.json({ message: 'Bebida creada' });
        } catch (error) {
            console.log("Error al agregar una nueva fila");
        res.status(500).json({ error: 'Error al agregar una nueva fila' });
        }
    }

    public async delete(req: Request, res: Response): Promise<void> {
        try { 
            const { id } = req.params;
            await pool.query('DELETE FROM bebidas WHERE id = ?', [id]);
            console.log("La fila fue eliminada, id:", id);
            res.json({ message: 'Bebida eliminada' });
        } catch (error) {
            console.log("Error al eliminar la fila");
            res.status(500).json({ error: 'Error al eliminar la fila' });
        }
    }
    public async update(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            await pool.query('UPDATE bebidas SET ? WHERE id = ?', [req.body, id]);
            console.log("Fila actualizada");
            res.json({ message: 'Bebida actualizada' });
        } catch (error) {
            console.log("Error al actualizar los datos");
            res.status(500).json({ error: 'Error al actualizar los datos' });
        }
    }
}



const bebidasControllers = new BebidasControllers();
export default bebidasControllers;
