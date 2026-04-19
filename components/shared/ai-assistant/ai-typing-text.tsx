import { useEffect, useState } from "react";
import { Typography } from "@/components/ui/typography";

type AiTypingTextProps = {
  text: string;
};

export function AiTypingText({ text }: AiTypingTextProps) {
  const [displayed, setDisplayed] = useState<string>("");

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 18);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <Typography variant="p" className="text-status-active-text leading-relaxed">
      {displayed}
    </Typography>
  );
}
