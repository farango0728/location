import { Router } from "express";
import {checkJwt} from '../middlewares/jwt'
import {checkRole} from '../middlewares/validateRole'

const router = Router();

import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
} from "../controllers/user.controller";

router.get("/users", [checkJwt, checkRole(['admin'])],  getUsers);
router.get("/users/:id", [checkJwt, checkRole(['admin'])], getUser);
router.post("/users", createUser);
router.put("/users/:id", [checkJwt, checkRole(['admin'])], updateUser);
router.delete("/users/:id", [checkJwt, checkRole(['admin'])], deleteUser);

export default router;