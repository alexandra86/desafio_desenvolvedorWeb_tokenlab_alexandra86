import { AppDataSource } from "../../data-source";
import { Event, User } from "../../entities";
import { AppError } from "../../errors";
import {
  IEvent,
  IEventRepo,
  IEventReturn,
} from "../../interfaces/events.interface";
import { IUserRepo } from "../../interfaces/users.interface";
import { returnEventSchema } from "../../schemas/events.schema";

export const createEventService = async (
  eventData: IEvent,
  userId: string
): Promise<IEventReturn> => {
  const userRepository: IUserRepo = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id: parseInt(userId),
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const eventRepository: IEventRepo = AppDataSource.getRepository(Event);

  const event: Event = eventRepository.create({
    ...eventData,
    user: user!,
  });

  await eventRepository.save(event);

  return returnEventSchema.parse(event);
};
