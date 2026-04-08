import Image from "next/image";

interface BookReviewBubbleProps {
  text: string;
}

export default function BookReviewBubble({ text }: BookReviewBubbleProps) {
  return (
    <div className="relative w-48 h-24">
      <Image
        src="/images/book-review-bubble.png"
        alt=""
        fill
        className="object-contain"
      />
      <span className="absolute inset-0 flex items-center justify-center z-10 px-4 text-center font-jersey20 text-white text-sm">
        {text}
      </span>
    </div>
  );
}