import { themes } from "../../theme";
import "./Card.css";
import { useCardContext } from "./context";

interface CardCategoryProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function CardCategory({ children, ...props }: CardCategoryProps) {
  const { sizeStyle, theme } = useCardContext();

  return (
    <div
      {...props}
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
