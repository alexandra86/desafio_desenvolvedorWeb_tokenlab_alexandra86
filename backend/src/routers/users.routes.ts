import { Router } from "express";
import { ensureUniqueEmailMiddleware } from "../middlewares/ensureUniqueEmail.middleware";
import { updateUserSchema, userSchema } from "../schemas/users.schema";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureIsAuthenticatedMiddleware } from "../middlewares/ensureIsAuthenticated.middleware";
import { ensureUserExistsMiddleware } from "../middlewares/ensureUserExists.middleware";
import {
  createUserController,
  deleteUserController,
  listUsersController,
  retrieveUserController,
  updateUserController,
} from "../controllers/users.controllers";

export const usersRoutes = Router();

usersRoutes.post(
  "",
  ensureUniqueEmailMiddleware,
  ensureDataIsValidMiddleware(userSchema),
  createUserController
);

usersRoutes.get("", listUsersController);

usersRoutes.use(ensureTokenIsValidMiddleware);

usersRoutes.get("/:userId", retrieveUserController);

usersRoutes.patch(
  "/:userId",
  ensureUserExistsMiddleware,
  ensureIsAuthenticatedMiddleware,
  ensureDataIsValidMiddleware(updateUserSchema),
  updateUserController
);

usersRoutes.delete(
  "/:userId",
  ensureUserExistsMiddleware,
  ensureIsAuthenticatedMiddleware,
  deleteUserController
);
