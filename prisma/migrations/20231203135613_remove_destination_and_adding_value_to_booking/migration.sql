/*
  Warnings:

  - You are about to drop the column `id_destination` on the `booking` table. All the data in the column will be lost.
  - You are about to drop the `destination` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `booking` DROP FOREIGN KEY `booking_id_destination_fkey`;

-- AlterTable
ALTER TABLE `booking` DROP COLUMN `id_destination`,
    ADD COLUMN `airlines` VARCHAR(191) NULL,
    ADD COLUMN `from` VARCHAR(191) NULL,
    ADD COLUMN `to` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `destination`;
