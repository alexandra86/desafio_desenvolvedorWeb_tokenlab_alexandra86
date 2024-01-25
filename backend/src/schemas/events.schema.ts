import { z } from "zod";
import { returnUserSchema } from "./users.schema";

export const eventSchema = z.object({
  nameEvent: z.string().min(3).max(127),
  description: z.string(),
  dateEvent: z.string(),
  startTime: z.string(),
  endTime: z.string(),
});

export const returnEventSchema = eventSchema.extend({
  id: z.number(),
});

export const returnEventWithCUserSchema = returnEventSchema.extend({
  user: returnUserSchema,
});

export const returnAllEventSchema = returnEventSchema.array();

export const updateEventSchema = eventSchema.partial();
