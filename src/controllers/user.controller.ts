import {Request, Response, Router} from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entity/User';
const router = Router();
router.get("/",async (req: Request, res: Response): Promise<Response> => {
    try {
        const users = await getRepository(User).find();
        return res.json(users);
    } catch (error) {
        return res.status(400).send(error);    
    }
})

export default router;