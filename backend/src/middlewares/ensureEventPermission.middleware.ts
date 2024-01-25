import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Event } from "../entities";

export const ensureEventPermissionMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const eventId = parseInt(request.params.eventId);
  const userId = request.user.id;

  const eventRepository = AppDataSource.getRepository(Event);

  const findEvent = await eventRepository.findOne({
    where: {
      id: eventId,
      user: {
        id: parseInt(userId),
      },
    },
  });

  if (!findEvent) {
    return response
      .status(401)
      .json({ message: "You don`t have permissions!" });
  }

  next();
};
