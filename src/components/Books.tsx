'use client';

import { useTranslation } from "react-i18next";
import { books } from "@/data/books";
import BookCard from "./BookCard";

export default function Books() {
  const { t } = useTranslation();

  return (
    <section className="w-full flex flex-col items-center gap-24 py-32 px-6">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </section>
  );
}