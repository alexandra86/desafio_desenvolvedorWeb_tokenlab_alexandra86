import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
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

  const user = returnUserSchema.parse(findUser!);

  const events = findUser ? findUser.events : [];

  return { user, events };
};
