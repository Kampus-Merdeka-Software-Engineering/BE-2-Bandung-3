/*
  Warnings:

  - You are about to alter the column `date_destination` on the `booking` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `booking` MODIFY `date_destination` DATETIME(3) NULL;
