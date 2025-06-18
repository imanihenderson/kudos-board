const express = require("express");
const boards = express.Router();
const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

boards.get("/", async (req, res) => {
  const boardsList = await prisma.boards.findMany();
  res.json(boardsList);
});

boards.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const board = await prisma.boards.findUnique({
      where: { id: parseInt(id) },
    });

    if (!board) {
      return res.status(404).json({ error: "Board not found" });
    }

    res.json(board);
  } catch (error) {
    res.status(404).send("ID is not valid");
  }
});

boards.post("/", async (req, res) => {
  const { board_id, title, img_url, author, category } = req.body;

  try {
    const newBoard = await prisma.boards.create({
      data: {
        title,
        img_url,
        author,
        category,
      },
    });

    res.status(201).json(newBoard);
  } catch (error) {
  console.error("Prisma create error:", error);
  res.status(400).json({ error: "Failed to create board", details: error.message });
}
});

boards.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, img_url, author, category } = req.body;

  try {
    const existingBoard = await prisma.boards.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existingBoard) {
      return res.status(404).json({ error: "Board not found" });
    }

    const updatedBoard = await prisma.boards.update({
      where: { id: parseInt(id) },
      data: {
        title,
        img_url,
        author,
        category,
      },
    });

    res.json(updatedBoard);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Failed to update board" });
  }
});

boards.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const board = await prisma.boards.findUnique({
      where: { id: parseInt(id) },
    });

    if (!board) {
      return res.status(404).json({ error: "Board not found" });
    }

    await prisma.boards.delete({
      where: { id: parseInt(id) },
    });

    res.json({ message: "Board deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Failed to delete board" });
  }
});

module.exports = boards;
