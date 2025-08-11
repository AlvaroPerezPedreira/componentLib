import { themes } from "../../theme";
import "./Card.css";
import { useCardContext } from "./context";

interface CardPriceProps extends React.HTMLAttributes<HTMLDivElement> {
  oldPrice?: string;
  newPrice: string;
}

export function CardPrice({ oldPrice, newPrice, ...props }: CardPriceProps) {
  const { sizeStyle, theme } = useCardContext();

  return (
    <div
      {...props}
      className={`card-price card-price--${sizeStyle}`}
      style={
        {
          "--text-color-highlight": themes[theme ?? "light"].highlight,
          "--text-color": themes[theme ?? "light"].color,
        } as React.CSSProperties
      }
    >
      <span className={`card-price-old card-price-old--${sizeStyle}`}>
        {oldPrice}
      </span>
      <span className={`card-price-new card-price-new--${sizeStyle}`}>
        {newPrice}
      </span>
    </div>
  );
}
