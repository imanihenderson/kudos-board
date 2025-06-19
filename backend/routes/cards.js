const express = require("express");
const cards = express.Router();
const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

//gets cards for a board 
cards.get("/board/:boardId", async (req, res) => {
  const { boardId } = req.params;

  try {
    const boardCards = await prisma.cards.findMany({
      where: { card_id: parseInt(board_id) }, 
    });

    res.json(boardCards);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch cards for the board" });
  }
});



cards.get("/", async (req, res) => {
  const cardsList = await prisma.cards.findMany();
  res.json(cardsList);
});

cards.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const card = await prisma.cards.findUnique({
      where: { id: parseInt(id) },
    });

    if (!card) {
      return res.status(404).json({ error: "Card not found" });
    }
    res.json(card);
  } catch (error) {
    res.status(404).send("ID is not valid");
  }
});

cards.post("/", async (req, res) => {
  const { card_id, title, img_url, upvotes, author } = req.body;

  try {
    const newCard = await prisma.cards.create({
      data: {
        card_id,
        title,
        img_url,
        upvotes,
        author,
      },
    });

    res.status(201).json(newCard);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Failed to create card" });
  }
});

cards.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { card_id, title, img_url, upvotes, author } = req.body;

  try {
    const existingCard = await prisma.cards.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existingCard) {
      return res.status(404).json({ error: "Card not found" });
    }

    const updatedCard = await prisma.cards.update({
      where: { id: parseInt(id) },
      data: {
        card_id,
        title,
        img_url,
        upvotes,
        author,
      },
    });

    res.json(updatedCard);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Failed to update card" });
  }
});

cards.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const card = await prisma.cards.findUnique({
      where: { id: parseInt(id) },
    });

    if (!card) {
      return res.status(404).json({ error: "Card not found" });
    }

    await prisma.cards.delete({
      where: { id: parseInt(id) },
    });

    res.json({ message: "Card deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Failed to delete card" });
  }
});

module.exports = cards;
