import { UserController } from "../controllers/index.js";
import { UserRepository } from "../repositories/index.js";
import { UserService } from "../services/index.js";

const makeUsers = () => {
  const userRepository = new UserRepository();
  const userSerivice = new UserService(userRepository);
  const userController = new UserController(userSerivice);
  return userController;
};

export default makeUsers;
