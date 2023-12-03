/*
  Warnings:

  - You are about to drop the column `adults` on the `booking` table. All the data in the column will be lost.
  - You are about to drop the column `airlines` on the `booking` table. All the data in the column will be lost.
  - Added the required column `adult` to the `booking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `booking` DROP COLUMN `adults`,
    DROP COLUMN `airlines`,
    ADD COLUMN `adult` INTEGER NOT NULL,
    ADD COLUMN `airline` VARCHAR(191) NULL;
