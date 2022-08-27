import { errors } from "celebrate";
import userRouter from "./users/index.js";

export default function mainRouter(app) {
  app.use("/users", userRouter());
  app.use(errors());

  return app;
}
