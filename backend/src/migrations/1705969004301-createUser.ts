import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1705969004301 implements MigrationInterface {
    name = 'CreateUser1705969004301'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."users_gender_enum" AS ENUM('male', 'female', 'no binary', 'I prefer not to say')`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(127) NOT NULL, "email" character varying(256) NOT NULL, "password" character varying(120) NOT NULL, "phone" character varying(45) NOT NULL, "image" text, "gender" "public"."users_gender_enum" NOT NULL DEFAULT 'I prefer not to say', CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "events" ("id" SERIAL NOT NULL, "nameEvent" character varying(127) NOT NULL, "description" text NOT NULL, "dateEvent" date NOT NULL DEFAULT ('now'::text)::date, "startTime" TIME NOT NULL DEFAULT now(), "endTime" TIME NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_40731c7151fe4be3116e45ddf73" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "events" ADD CONSTRAINT "FK_9929fa8516afa13f87b41abb263" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "events" DROP CONSTRAINT "FK_9929fa8516afa13f87b41abb263"`);
        await queryRunner.query(`DROP TABLE "events"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_gender_enum"`);
    }

}
