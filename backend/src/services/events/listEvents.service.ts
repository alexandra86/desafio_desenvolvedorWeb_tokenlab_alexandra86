import { AppDataSource } from "../../data-source";
import { Event } from "../../entities";
import { IAllEventReturn, IEventRepo } from "../../interfaces/events.interface";
import { returnAllEventSchema } from "../../schemas/events.schema";

export const listEventService = async (): Promise<IAllEventReturn> => {
  const eventRepository: IEventRepo = AppDataSource.getRepository(Event);

  const findEvents: Array<Event> = await eventRepository.find();

  return returnAllEventSchema.parse(findEvents);
};
