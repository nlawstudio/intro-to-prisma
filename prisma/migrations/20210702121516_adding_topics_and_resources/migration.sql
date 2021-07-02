-- CreateEnum
CREATE TYPE "ResourceType" AS ENUM ('VIDEO', 'BLOG_POST', 'BOOK');

-- CreateTable
CREATE TABLE "Resource" (
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "tags" TEXT[],
    "type" "ResourceType" NOT NULL,
    "topicUuid" TEXT,

    PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Topic" (
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    PRIMARY KEY ("uuid")
);

-- AddForeignKey
ALTER TABLE "Resource" ADD FOREIGN KEY ("topicUuid") REFERENCES "Topic"("uuid") ON DELETE SET NULL ON UPDATE CASCADE;
