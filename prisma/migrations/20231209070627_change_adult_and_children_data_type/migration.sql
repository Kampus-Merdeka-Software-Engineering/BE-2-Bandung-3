/*
  Warnings:

  - You are about to alter the column `adult` on the `booking` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `children` on the `booking` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `booking` MODIFY `adult` INTEGER NOT NULL,
    MODIFY `children` INTEGER NOT NULL;
