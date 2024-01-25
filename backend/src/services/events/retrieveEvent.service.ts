import { AppDataSource } from "../../data-source";
import { Event } from "../../entities";
import { IEventRepo, IEventReturn } from "../../interfaces/events.interface";
import { returnEventWithCUserSchema } from "../../schemas/events.schema";

export const retrieveEventService = async (
  eventId: string
): Promise<IEventReturn> => {
  const eventRepository: IEventRepo = AppDataSource.getRepository(Event);

  const findEvent = await eventRepository.findOne({
    where: {
      id: parseInt(eventId),
    },
    relations: {
      user: true,
    },
  });

  const user = returnEventWithCUserSchema.parse(findEvent!);

  return user;
};
