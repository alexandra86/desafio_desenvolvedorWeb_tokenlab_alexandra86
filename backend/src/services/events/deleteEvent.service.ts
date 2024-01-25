import { AppDataSource } from "../../data-source";
import { Event } from "../../entities";
import { IEventRepo } from "../../interfaces/events.interface";

export const deleteEventService = async (eventId: string): Promise<void> => {
  const eventRepository: IEventRepo = AppDataSource.getRepository(Event);

  const event = await eventRepository.findOne({
    where: {
      id: parseInt(eventId),
    },
  });

  await eventRepository.remove(event!);
};
