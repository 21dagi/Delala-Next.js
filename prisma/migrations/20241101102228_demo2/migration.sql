/*
  Warnings:

  - Added the required column `aboutagent` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullname` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "aboutagent" TEXT NOT NULL,
ADD COLUMN     "fullname" TEXT NOT NULL;
