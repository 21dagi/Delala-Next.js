/*
  Warnings:

  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[phone]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'AGENT', 'ADMIN');

-- CreateEnum
CREATE TYPE "ProductType" AS ENUM ('HOUSE', 'APARTMENT', 'CONDOMINIUM', 'CAR');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'CONFIRMED', 'CANCELLED');

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "email",
DROP COLUMN "name",
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "role" "Role" NOT NULL;

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "agentId" INTEGER NOT NULL,
    "type" "ProductType" NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "numberOfBeds" INTEGER NOT NULL DEFAULT 0,
    "numberOfSeats" INTEGER NOT NULL DEFAULT 0,
    "color" TEXT,
    "price" DECIMAL(65,30) NOT NULL,
    "K_Ketema" TEXT NOT NULL,
    "Woreda" TEXT NOT NULL,
    "HouseNumber" TEXT,
    "images" JSONB NOT NULL,
    "available" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "status" "OrderStatus" NOT NULL,
    "orderDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "returnDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "orderId" INTEGER NOT NULL,
    "senderId" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuditLog" (
    "id" SERIAL NOT NULL,
    "userI" INTEGER NOT NULL,
    "productI" INTEGER NOT NULL,
    "action" TEXT NOT NULL,
    "targetAgentId" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_userI_fkey" FOREIGN KEY ("userI") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_productI_fkey" FOREIGN KEY ("productI") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
