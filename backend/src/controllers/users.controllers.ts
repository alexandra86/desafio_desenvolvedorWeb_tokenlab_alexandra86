import { Request, Response } from "express";
import { IUpdateUser, IUser } from "../interfaces/users.interface";
import { createUserService } from "../services/users/createUser.service";
import { listUsersService } from "../services/users/listUsers.service";
import { retrieveUserService } from "../services/users/retrieveUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";
import { updateUserService } from "../services/users/updateUser.service";

export const createUserController = async (
  request: Request,
  response: Response
) => {
  const userData: IUser = request.body;

  const newUser = await createUserService(userData);

  return response.status(201).json(newUser);
};

export const listUsersController = async (_: Request, response: Response) => {
  const users = await listUsersService();

  return response.json(users);
};

export const retrieveUserController = async (
  request: Request,
  response: Response
) => {
  const userId = request.user.id;
  const { user, events } = await retrieveUserService(userId);

  const userWithEvents = {
    user: user,
    events: events,
  };

  return response.json(userWithEvents);
};

export const updateUserController = async (
  request: Request,
  response: Response
) => {
  const userData: IUpdateUser = request.body;
  const userId = request.params.id;

  const updateUser = await updateUserService(userData, userId);

  return response.json(updateUser);
};

export const deleteUserController = async (
  request: Request,
  response: Response
) => {
  const userId = request.params.id;
  await deleteUserService(userId);

  return response.status(204).send();
};
