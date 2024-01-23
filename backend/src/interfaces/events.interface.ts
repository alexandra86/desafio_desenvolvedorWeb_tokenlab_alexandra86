import { DeepPartial, Repository } from "typeorm";
import { z } from "zod";
import {
  eventSchema,
  returnAllEventSchema,
  returnEventSchema,
} from "../schemas/events.schema";
import { Event } from "../entities";

export type IEvent = z.infer<typeof eventSchema>;
export type IEventReturn = z.infer<typeof returnEventSchema>;
export type IAllEventReturn = z.infer<typeof returnAllEventSchema>;
export type IEventRepo = Repository<Event>;
export type IUpdateEvent = DeepPartial<IEvent>;
