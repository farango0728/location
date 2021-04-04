import { Router } from "express";
import { checkJwt } from './../middlewares/jwt';

const router = Router();

import {
    signup,
    changePassword
} from "../controllers/auth.controller";

router.post("/login", signup);

router.post('/change-password', [checkJwt], changePassword);

export default router;