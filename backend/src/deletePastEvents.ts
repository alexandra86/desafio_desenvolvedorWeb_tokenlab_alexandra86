import { Event } from "./entities";
import { AppDataSource } from "./data-source";

export const deletePastEvents = async () => {
  try {
    const eventRepository = AppDataSource.getRepository(Event);

    const now = new Date();
    await eventRepository
      .createQueryBuilder()
      .delete()
      .where("dateEvent < :now", { now })
      .execute();

    console.log("Successfully deleted past events!");
  } catch (error) {
    console.error("Error deleting past events:", error);
  }
};
