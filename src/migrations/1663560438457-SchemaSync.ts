import { MigrationInterface, QueryRunner } from 'typeorm';

export class SchemaSync1663560438457 implements MigrationInterface {
  name = 'SchemaSync1663560438457';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" ADD "description" character varying`,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" DROP COLUMN "description"`,
      undefined,
    );
  }
}
