export class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async save(user) {
    const users = await this.userRepository.save(user);

    return { users, count: users.length };
  }

  async findAll(findAllOptions) {
    const users = await this.userRepository.findAll(findAllOptions);

    return { users, count: users.length };
  }
}
