import { Router } from "express";
const router = Router();
router.get('/', (request, response) => {
    const helloMsg = {
        msg: 'Olá, seja bem-vindo, DNP!'
    };
    return response.status(200).json(helloMsg);
});
export default router;
//# sourceMappingURL=hello.routes.js.map