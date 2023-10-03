/*
  Warnings:

  - Added the required column `status` to the `meetings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "meetings" ADD COLUMN     "status" TEXT NOT NULL;
