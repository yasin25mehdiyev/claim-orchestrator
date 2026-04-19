import { useEffect, useRef, useState } from "react";
import { Typography } from "@/components/ui/typography";

type AiTypingTextProps = {
  text: string;
};

export function AiTypingText({ text }: AiTypingTextProps) {
  const [displayed, setDisplayed] = useState<string>("");
  const iRef = useRef<number>(0);

  useEffect(() => {
    iRef.current = 0
    const interval = setInterval(() => {
      iRef.current += 1
      setDisplayed(text.slice(0, iRef.current))
      if (iRef.current >= text.length) clearInterval(interval)
    }, 18)
    return () => clearInterval(interval)
  }, [text])

  return (
    <Typography variant="p" className="text-status-active-text leading-relaxed">
      {displayed}
    </Typography>
  );
}
