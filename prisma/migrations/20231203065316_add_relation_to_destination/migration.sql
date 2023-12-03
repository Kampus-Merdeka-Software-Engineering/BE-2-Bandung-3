-- AlterTable
ALTER TABLE `booking` ADD COLUMN `id_destination` INTEGER NULL;

-- CreateTable
CREATE TABLE `destination` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `booking` ADD CONSTRAINT `booking_id_destination_fkey` FOREIGN KEY (`id_destination`) REFERENCES `destination`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
