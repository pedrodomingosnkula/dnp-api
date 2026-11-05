import { Router } from "express";
import type { Request, Response } from "express";


const router = Router();


router.get('/', (request: Request, response: Response) => {

  // const helloMsg = {
  //   msg: 'Olá, seja bem-vindo, DNP!'
  // };

  return response.render("home", {
    nome: "Domingos"
  });

})


export default router;
