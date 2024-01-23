import { AppDataSource } from "../../data-source";
import { Event, User } from "../../entities";
import { IUserRepo } from "../../interfaces/users.interface";

export const deleteUserService = async (userId: string): Promise<void> => {
  const userRepository: IUserRepo = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      id: parseInt(userId),
    },
    relations: ["events"],
  });

  if (!user) {
    throw new Error("User not found!");
  }

  const events = user.events;

  for (const event of events) {
    const eventRepository = AppDataSource.getRepository(Event);

    await eventRepository.manager.remove(event);
  }

  await userRepository.remove(user);
};
