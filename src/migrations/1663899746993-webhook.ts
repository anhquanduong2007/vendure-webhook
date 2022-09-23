import {MigrationInterface, QueryRunner} from "typeorm";

export class webhook1663899746993 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "webhook_per_channel_entity" ("createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "channelId" varchar NOT NULL, "url" varchar NOT NULL, "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, CONSTRAINT "UQ_d7aa5b8501ddcc0795056409b36" UNIQUE ("channelId"))`, undefined);
   }

   public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "webhook_per_channel_entity"`, undefined);
   }

}
