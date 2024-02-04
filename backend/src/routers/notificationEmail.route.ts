import { Request, Response } from "express";
import { Router } from "express";
import notificationEmailService from "../services/notificationEmail/notificationEmail.service";

const notificationEmailRoutes = Router();

notificationEmailRoutes.get("", async (_: Request, response: Response) => {
  try {
    await notificationEmailService.checkUpcomingEvents();
    response.status(200).json({ message: "Check upcoming events completed." });
  } catch (error: any) {
    console.error("Error checking upcoming events:", error.message);
    response.status(500).json({ error: "Internal server error." });
  }
});

export default notificationEmailRoutes;
