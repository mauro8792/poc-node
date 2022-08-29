import { UserRepository } from "../repositories/index.js";

import createUsers from "./factories/user.js";

describe("Test  a modo ejemplo", () => {
  it("Test sum", () => {
    const a = 2;
    const b = 4;

    const total = a + b;
    expect(total).toEqual(6);
  });
});

describe("Test  UserRepository", () => {
  it("Test findAll", async () => {
    await createUsers();

    const a = new UserRepository();
    const b = await a.findAll();
    expect(b.length).toEqual(10);
  });
});
