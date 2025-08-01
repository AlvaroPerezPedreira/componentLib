import { themes } from "../../theme";
import "./Card.css";
import { useCardContext } from "./context";

export function CardCategory({ children }: { children: React.ReactNode }) {
  const { sizeStyle, theme } = useCardContext();

  return (
    <div
      className={`card-cat card-cat--${sizeStyle}`}
      style={
        {
          "--text-color-highlight": themes[theme ?? "light"].highlight,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
