import { Router } from "express";

const router = Router();

import {
    location
} from "../controllers/location.controller";

router.get("/services", location);

export default router;