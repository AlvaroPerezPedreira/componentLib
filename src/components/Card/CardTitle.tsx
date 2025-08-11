import { themes } from "../../theme";
import "./Card.css";
import { useCardContext } from "./context";

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function CardTitle({ children, ...props }: CardTitleProps) {
  const { sizeStyle, theme } = useCardContext();

  return (
    <h2
      {...props}
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
