/*
  Warnings:

  - Made the column `phone` on table `booking` required. This step will fail if there are existing NULL values in that column.
  - Made the column `date_destination` on table `booking` required. This step will fail if there are existing NULL values in that column.
  - Made the column `from` on table `booking` required. This step will fail if there are existing NULL values in that column.
  - Made the column `to` on table `booking` required. This step will fail if there are existing NULL values in that column.
  - Made the column `adult` on table `booking` required. This step will fail if there are existing NULL values in that column.
  - Made the column `children` on table `booking` required. This step will fail if there are existing NULL values in that column.
  - Made the column `airline` on table `booking` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `booking` MODIFY `phone` VARCHAR(191) NOT NULL,
    MODIFY `date_destination` VARCHAR(191) NOT NULL,
    MODIFY `from` VARCHAR(191) NOT NULL,
    MODIFY `to` VARCHAR(191) NOT NULL,
    MODIFY `adult` VARCHAR(191) NOT NULL,
    MODIFY `children` VARCHAR(191) NOT NULL,
    MODIFY `airline` VARCHAR(191) NOT NULL;
