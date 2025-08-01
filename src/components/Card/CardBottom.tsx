import "./Card.css";
import { useCardContext } from "./context";

export function CardBottom({ children }: { children: React.ReactNode }) {
  const { sizeStyle } = useCardContext();

  return (
    <div className={`card-bottom card-bottom--${sizeStyle}`}>{children}</div>
  );
}
