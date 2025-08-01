import { themes } from "../../theme";
import "./Card.css";
import { useCardContext } from "./context";

export function CardPrice({
  oldPrice,
  newPrice,
}: {
  oldPrice?: string;
  newPrice: string;
}) {
  const { sizeStyle, theme } = useCardContext();

  return (
    <div
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
