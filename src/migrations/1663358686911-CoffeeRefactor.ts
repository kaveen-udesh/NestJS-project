import { MigrationInterface, QueryRunner } from 'typeorm';

export class CoffeeRefactor1663358686911 implements MigrationInterface {

  // Renames the name column to title in the coffee table
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE "coffee" RENAME COLUMN "name" TO "title"`,
    );
  }
  
  // Renames the title column back to name in the coffee table
  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE "coffee" RENAME COLUMN "title" TO "name"`,
    );
  }
}
