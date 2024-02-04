import * as nodemailer from "nodemailer";
import moment from "moment";
import { Event } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";

class NotificationEmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  async sendAlertEmail(email: string, nameOfEvent: string): Promise<void> {
    const mailOptions: nodemailer.SendMailOptions = {
      from: "tlevents2024@gmail.com",
      to: email,
      subject: "Event Alert",
      text: `The event "${nameOfEvent}" will be tomorrow!`,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log("Email sent:", info.response);
    } catch (error: any) {
      throw new AppError("Error sending email:", error.message);
    }
  }

  async checkUpcomingEvents(): Promise<void> {
    const eventRepository = AppDataSource.getRepository(Event);
    const hoje = new Date();

    try {
      const events = await eventRepository.find({
        relations: ["user"],
      });

      events.forEach(async (event) => {
        const dateOfEvent = new Date(event.dateEvent);
        const differenceDays = moment(dateOfEvent).diff(moment(hoje), "days");

        if (differenceDays >= 0 && differenceDays < 1) {
          await this.sendAlertEmail(event.user.email, event.nameEvent);
        }
      });
    } catch (error: any) {
      throw new AppError("Error checking nearby events:", error.message);
    }
  }
}

export default new NotificationEmailService();
