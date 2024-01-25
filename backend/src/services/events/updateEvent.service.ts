import { AppDataSource } from "../../data-source";
import { Event } from "../../entities";
import { AppError } from "../../errors";
import {
  IEventRepo,
  IEventReturn,
  IUpdateEvent,
} from "../../interfaces/events.interface";
import { returnEventSchema } from "../../schemas/events.schema";

export const updateEventService = async (
  newEventData: IUpdateEvent,
  eventId: string
): Promise<IEventReturn> => {
  if (Object.keys(newEventData).length === 0) {
    throw new AppError("invalid data!", 400);
  }

  const eventRepository: IEventRepo = AppDataSource.getRepository(Event);

  const oldEventData = await eventRepository.findOneBy({
    id: parseInt(eventId),
  });

  const event = eventRepository.create({
    ...oldEventData,
    ...newEventData,
  });

  await eventRepository.save(event);

  const updatedEvent = returnEventSchema.parse(event);
  return updatedEvent;
};
