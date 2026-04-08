import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Book } from "@/data/books";
import BookReviewBubble from "./BookReviewBubble";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  const { t } = useTranslation();

  const title = t(`${book.translationKey}.title`);
  const subtitle = t(`${book.translationKey}.subtitle`);
  const description = t(`${book.translationKey}.description`);
  const bubbleText = t(`${book.translationKey}.bubbleText`);

  return (
    <div className="relative">

      {/* Card */}
      <div className="flex flex-col md:flex-row gap-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-3xl">

        {/* Book image */}
        <div className="relative w-full md:w-48 h-64 md:h-auto shrink-0">
          <Image
            src={book.image}
            alt={title}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Text content */}
        <div className="flex flex-col justify-center gap-2">
          <h2 className="font-jersey20 text-3xl text-white">{title}</h2>
          {subtitle && (
            <p className="font-jersey20 text-white/60 text-sm">{subtitle}</p>
          )}
          <p className="font-island_moments text-white/90 text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Dialog bubble overlapping bottom-left corner */}
      <div className="absolute -bottom-10 -left-6">
        <BookReviewBubble text={bubbleText} />
      </div>

    </div>
  );
}