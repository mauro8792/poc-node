import { Op } from "sequelize";
import { UserModel } from "../models/UserModel.js";

export class UserRepository {
  async save(userPayload) {
    const user = await UserModel.create({ ...userPayload });
    return user.toJSON();
  }

  async findAll(findOptions) {
    try {
      const { offset, limit = 10, name, lastName, age } = findOptions;

      const find = {
        ...(name ? { name: { [Op.like]: `%${name}%` } } : {}),
        ...(lastName ? { lastName: { [Op.like]: `%${lastName}%` } } : {}),
        ...(age ? { age: { [Op.like]: `%${age}%` } } : {}),
      };

      const where = find;
      console.log("{ where, limit, offset }", { where, limit, offset });
      const users = await UserModel.findAll({ where, limit, offset });

      return users;
    } catch (error) {
      console.log("Error repository", error);
    }
  }
}
