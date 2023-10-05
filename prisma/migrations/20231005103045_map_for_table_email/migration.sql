/*
  Warnings:

  - You are about to drop the `Email` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Email" DROP CONSTRAINT "Email_leadId_fkey";

-- DropTable
DROP TABLE "Email";

-- CreateTable
CREATE TABLE "emails" (
    "id" TEXT NOT NULL,
    "leadId" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "emails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "emails_email_leadId_idx" ON "emails"("email", "leadId");

-- CreateIndex
CREATE UNIQUE INDEX "emails_email_key" ON "emails"("email");

-- AddForeignKey
ALTER TABLE "emails" ADD CONSTRAINT "emails_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "leads"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
