import Image from "next/image";

interface SocialBubbleProps {
  label: string;
  href: string;
  width?: number;
  height?: number;
}

export default function SocialBubble({ label, href, width = 80, height = 80 }: SocialBubbleProps) {
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
      <span className="relative z-10 font-jersey20 text-white text-sm">
        {label}
      </span>
    </a>
  );
}