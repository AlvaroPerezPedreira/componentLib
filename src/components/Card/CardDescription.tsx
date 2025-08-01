import { themes } from "../../theme";
import "./Card.css";
import { useCardContext } from "./context";

export function CardDescription({ children }: { children: React.ReactNode }) {
  const { sizeStyle, theme } = useCardContext();

  return (
    <p
      className={`card-desc card-desc--${sizeStyle}`}
      style={
        {
          "--text-color2": themes[theme ?? "light"].color2,
        } as React.CSSProperties
      }
    >
      {children}
    </p>
  );
}
