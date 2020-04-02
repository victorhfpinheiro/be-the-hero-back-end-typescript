import crypto from 'crypto';
import { Request, Response } from 'express';
import connection from '../database/connection';

export class OngController {
    
    public async index (request: Request, response: Response) {
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    }

    public async create (request: Request, response: Response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name, 
            email, 
            whatsapp, 
            city, 
            uf,
        });

        return response.json({ id });
    }
    
}