-- CreateTable
CREATE TABLE "member" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "data_init" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_up" DATETIME NOT NULL,
    "description" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "member_id_key" ON "member"("id");

-- CreateIndex
CREATE UNIQUE INDEX "member_cpf_key" ON "member"("cpf");
