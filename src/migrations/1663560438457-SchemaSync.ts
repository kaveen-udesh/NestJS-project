import { MigrationInterface, QueryRunner } from 'typeorm';

export class SchemaSync1663560438457 implements MigrationInterface {

  // Adds a new column description to the coffee table
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" ADD "description" character varying`,
      undefined,
    );
  }

  // Removes the 'description' column from the 'coffee' table
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" DROP COLUMN "description"`,
      undefined,
    );
  }
}
