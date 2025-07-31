import { Router } from "express";
import Book from "../models/books.js";

const router = Router();

router.post("/", async (req, res) => {
  const { error } = Book.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const newBook = await Book.create(req.body);
  res.status(201).send(newBook);
});

router.get("/", async (req, res) => {
  const books = await Book.find();
  res.status(200).send(books);
});

router.get("/:id", async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).send("book not found");
  res.status(200).send(book);
});

router.put("/:id", async (req, res) => {
  const { error } = bookSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!book) return res.status(404).send("book not found");
  res.status(200).send(book);
});

router.put("/delete/:id", async (req, res) => {
  const book = await Book.findByIdAndUpdate(
    req.params.id,
    { isActive: false },
    { new: true }
  );
  if (!book) return res.status(404).send("book not found");
  res.status(200).send(book);
});

export default router;
