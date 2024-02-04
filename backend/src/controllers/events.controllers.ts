import { Request, Response } from "express";
import { IEvent, IUpdateEvent } from "../interfaces/events.interface";
import { createEventService } from "../services/events/createEvent.service";
import { listEventService } from "../services/events/listEvents.service";
import { retrieveEventService } from "../services/events/retrieveEvent.service";
import { updateEventService } from "../services/events/updateEvent.service";
import { deleteEventService } from "../services/events/deleteEvent.service";
import notificationEmailService from "../services/notificationEmail/notificationEmail.service";

export const createEventController = async (
  request: Request,
  response: Response
) => {
  try {
    const eventData: IEvent = request.body;
    const userId = request.user.id;

    const newEvent = await createEventService(eventData, userId);

    await notificationEmailService.checkUpcomingEvents();

    return response.status(201).json(newEvent);
  } catch (error: any) {
    console.error(
      "Error creating or notifying about the event:",
      error.message
    );
    return response.status(500).json({ error: "Internal server error." });
  }
};

export const listEventsController = async (_: Request, response: Response) => {
  const events = await listEventService();

  return response.json(events);
};

export const retrieveEventController = async (
  request: Request,
  response: Response
) => {
  const eventId = request.params.eventId;
  const event = await retrieveEventService(eventId);

  return response.json(event);
};

export const updateEventController = async (
  request: Request,
  response: Response
) => {
  const eventData: IUpdateEvent = request.body;
  const eventId = request.params.eventId;

  const updateEvent = await updateEventService(eventData, eventId);

  return response.json(updateEvent);
};

export const deleteEventController = async (
  request: Request,
  response: Response
) => {
  const eventId = request.params.eventId;
  await deleteEventService(eventId);

  return response.status(204).send();
};
