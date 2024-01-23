import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";
import { IUserRepo, IUserWithEvent } from "../../interfaces/users.interface";
import { returnUserSchema } from "../../schemas/users.schema";

export const retrieveUserService = async (
  userId: string
): Promise<IUserWithEvent> => {
  const userRepository: IUserRepo = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOne({
    where: {
      id: parseInt(userId),
    },
    relations: {
      events: true,
    },
  });

  if (!findUser) {
    throw new AppError("User not found!", 404);
  }

  const user = returnUserSchema.parse(findUser!);

  const events = findUser ? findUser.events : [];

  return { user, events };
};
