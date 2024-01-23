import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { getRounds, hashSync } from "bcryptjs";
import { Event } from "./events.entity";

export enum UserGender {
  MALE = "male",
  FEMALE = "female",
  NOBINARY = "no binary",
  DEFAULT = "I prefer not to say",
}

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 127 })
  name: string;

  @Column({ type: "varchar", length: 256, unique: true })
  email: string;

  @Column({ type: "varchar", length: 120 })
  password: string;

  @Column({ type: "varchar", length: 45 })
  phone: string;

  @Column({ type: "text", nullable: true })
  image?: string | undefined | null;

  @Column({ type: "enum", enum: UserGender, default: UserGender.DEFAULT })
  gender: UserGender;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isEncrypted = getRounds(this.password);
    if (!isEncrypted) {
      this.password = hashSync(this.password, 10);
    }
  }

  @OneToMany(() => Event, (event) => event.user, { cascade: true })
  events: Event[];
}
