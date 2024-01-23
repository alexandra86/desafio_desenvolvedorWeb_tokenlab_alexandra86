import { z } from "zod";

export const eventSchema = z.object({
  nameEvent: z.string().min(3).max(127),
  description: z.string(),
  dateEvent: z.date(),
  startTime: z.string(),
  endTime: z.string(),
});

export const returnEventSchema = eventSchema.extend({
  id: z.number(),
});

export const returnAllEventSchema = returnEventSchema.array();

export const updateEventSchema = eventSchema.partial();
