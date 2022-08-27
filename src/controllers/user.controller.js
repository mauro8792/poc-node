export default class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  async findAll(req, res, next) {
    try {
      const { name, lastName, age, limit: limitString, offset: offsetString } = req.query;
      const limit = limitString ? parseInt(limitString) : undefined;
      const offset = offsetString ? parseInt(offsetString) : undefined;
      const users = await this.userService.findAll({ name, lastName, age, limit, offset });

      res.json({ ...users });
    } catch (error) {
      console.log(`Error: ${error}`);
      next(error);
    }
  }

  async createUser(req, res, next) {
    try {
      const { user } = req.body;
      const users = await this.userService.save(user);
      res.json({ ...users });
    } catch (error) {
      console.log(`Error: ${error}`);
      next(error);
    }
  }
}
