import { themes } from "../../theme";
import "./Card.css";
import { useCardContext } from "./context";

interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function CardDescription({ children, ...props }: CardDescriptionProps) {
  const { sizeStyle, theme } = useCardContext();

  return (
    <p
      {...props}
      className={`card-desc card-desc--${sizeStyle}`}
      style={
        {
          "--text-color2": themes[theme ?? "light"].highlight,
        } as React.CSSProperties
      }
    >
      {children}
    </p>
  );
}
