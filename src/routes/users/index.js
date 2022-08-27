import express from "express";
import makeUsers from "../../ioc/users.ioc.js";
import { validateCreate, validateFindAll } from "./userValidations.js";

const router = express.Router();
const userApp = makeUsers();

const userRouter = () => {
  router.get("/", validateFindAll, (req, res, next) => userApp.findAll(req, res, next));
  router.post("/", validateCreate, (req, res, next) => userApp.createUser(req, res, next));

  return router;
};

export default userRouter;
