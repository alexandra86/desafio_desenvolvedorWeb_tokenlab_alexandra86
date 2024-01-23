import { DeepPartial, Repository } from "typeorm";
import { z } from "zod";
import {
  returnAllUserSchema,
  returnUserSchema,
  userSchema,
} from "../schemas/users.schema";
import { User } from "../entities";
import { IAllEventReturn } from "./events.interface";

export type IUser = z.infer<typeof userSchema>;
export type IUserReturn = z.infer<typeof returnUserSchema>;
export type IAllUserReturn = z.infer<typeof returnAllUserSchema>;
export type IUserRepo = Repository<User>;
export type IUpdateUser = DeepPartial<IUser>;
export interface IUserWithEvent {
  user: IUserReturn;
  events: IAllEventReturn;
}
