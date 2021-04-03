import { Router } from "express";
import {checkJwt} from '../middlewares/jwt'

const router = Router();

import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
} from "../controllers/user.controller";

router.get("/users", [checkJwt],  getUsers);
router.get("/users/:id", [checkJwt], getUser);
router.post("/users", createUser);
router.put("/users/:id", [checkJwt], updateUser);
router.delete("/users/:id", [checkJwt], deleteUser);

export default router;