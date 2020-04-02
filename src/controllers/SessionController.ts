import { Request, Response } from 'express';
import connection from '../database/connection';

export class SessionController {

    public async create(request: Request, response: Response) {
        const { id } = request.body;

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();

        if (!ong) {
            return response.status(400).json({ error: 'No ONG found with this ID' });
        }

        return response.json(ong);
    }
}