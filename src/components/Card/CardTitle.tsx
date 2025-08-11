import { themes } from "../../theme";
import "./Card.css";
import { useCardContext } from "./context";

export function CardTitle({ children }: { children: React.ReactNode }) {
  const { sizeStyle, theme } = useCardContext();

  return (
    <h2
      className={`card-title card-title--${sizeStyle}`}
      data-testid="card-title"
      style={
        {
          "--text-color": themes[theme ?? "light"].color,
        } as React.CSSProperties
      }
    >
      {children}
    </h2>
  );
}
