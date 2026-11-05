import { Router } from "express";
import type { Request, Response } from "express";


const router = Router();


router.get('/', (request: Request, response: Response) => {

  const helloMsg = {
    msg: 'Olá, seja bem-vindo, DNP!'
  };

  return response.status(200).json(helloMsg);

})


export default router;
