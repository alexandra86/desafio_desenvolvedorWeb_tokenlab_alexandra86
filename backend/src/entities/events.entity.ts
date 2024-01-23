import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./users.entity";

@Entity("events")
export class Event {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 127 })
  nameEvent: string;

  @Column({ type: "text" })
  description: string;

  @Column({ type: "date", default: () => "CURRENT_DATE" })
  dateEvent: Date;

  @Column({ type: "time", default: () => "CURRENT_TIMESTAMP" })
  startTime: string;

  @Column({ type: "time", default: () => "CURRENT_TIMESTAMP" })
  endTime: string;

  @ManyToOne(() => User, (user) => user.events)
  @JoinColumn()
  user: User;
}
