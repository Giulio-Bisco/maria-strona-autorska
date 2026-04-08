import Image from "next/image";

interface SocialBubbleProps {
  label: string;
  href: string;
  width?: number;
  height?: number;
}

export default function SocialBubble({ label, href, width = 100, height = 100 }: SocialBubbleProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-flex items-center justify-center hover:scale-105 transition duration-200"
      style={{ width, height }}
    >
      <Image
        src="/images/dialog-bubble.png"
        alt=""
        fill
        className="object-contain"
      />
      <span className="relative -top-1 font-jersey20 text-lg">
        {label}
      </span>
    </a>
  );
}