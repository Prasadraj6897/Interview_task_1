import express from "express"
import { indexController } from "../../Controllers/IndexController/IndexController";

const router = express.Router();


router.get('/', indexController)

export default router;