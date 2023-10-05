/*
  Warnings:

  - A unique constraint covering the columns `[id,leadId]` on the table `meetings` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE INDEX "leads_id_idx" ON "leads"("id");

-- CreateIndex
CREATE UNIQUE INDEX "meetings_id_leadId_key" ON "meetings"("id", "leadId");
