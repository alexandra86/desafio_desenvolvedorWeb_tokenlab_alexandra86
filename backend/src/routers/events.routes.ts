import { Router } from "express";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { eventSchema, updateEventSchema } from "../schemas/events.schema";
import { ensureEventExistsMiddleware } from "../middlewares/ensureEventExists.middleware";
import { ensureEventPermissionMiddleware } from "../middlewares/ensureEventPermission.middleware";
import {
  createEventController,
  deleteEventController,
  listEventsController,
  retrieveEventController,
  updateEventController,
} from "../controllers/events.controllers";

export const eventsRoutes = Router();

eventsRoutes.use(ensureTokenIsValidMiddleware);

eventsRoutes.post(
  "",
  ensureDataIsValidMiddleware(eventSchema),
  createEventController
);

eventsRoutes.get("", listEventsController);

eventsRoutes.get(
  "/:eventId",
  ensureEventExistsMiddleware,
  ensureEventPermissionMiddleware,
  retrieveEventController
);

eventsRoutes.patch(
  "/:eventId",
  ensureEventExistsMiddleware,
  ensureEventPermissionMiddleware,
  ensureDataIsValidMiddleware(updateEventSchema),
  updateEventController
);

eventsRoutes.delete(
  "/:eventId",
  ensureEventExistsMiddleware,
  ensureEventPermissionMiddleware,
  deleteEventController
);
