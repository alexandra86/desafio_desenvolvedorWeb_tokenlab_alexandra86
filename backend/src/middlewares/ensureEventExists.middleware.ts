import { Request, Response, NextFunction } from "express";
import { IEventRepo } from "../interfaces/events.interface";
import { AppDataSource } from "../data-source";
import { Event } from "../entities";
import { AppError } from "../errors";

export const ensureEventExistsMiddleware = async (
  request: Request,
  _: Response,
  next: NextFunction
): Promise<void> => {
  const eventRepository: IEventRepo = AppDataSource.getRepository(Event);

  const findEvent = await eventRepository.findOne({
    where: {
      id: parseInt(request.params.eventId),
    },
  });

  if (!findEvent) {
    throw new AppError("Event not found!", 404);
  }
  return next();
};
