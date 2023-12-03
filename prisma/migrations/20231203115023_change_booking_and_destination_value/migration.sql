/*
  Warnings:

  - You are about to drop the column `name` on the `destination` table. All the data in the column will be lost.
  - Added the required column `adults` to the `booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `children` to the `booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kota` to the `destination` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `booking` ADD COLUMN `adults` INTEGER NOT NULL,
    ADD COLUMN `children` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `destination` DROP COLUMN `name`,
    ADD COLUMN `kota` VARCHAR(191) NOT NULL;
