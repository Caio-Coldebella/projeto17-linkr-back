import { Router } from "express";

const router = Router();

router.post('post/:id/like', (req, res) => { res.send('<h1>post/:id/like</h1>') })

export default router;
