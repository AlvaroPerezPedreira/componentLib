import React from "react";
import "./Card.css";
import { useCardContext } from "./context";

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function CardContent({ children, ...props }: CardContentProps) {
  const { sizeStyle } = useCardContext();

  return (
    <div {...props} className={`card-info card-info--${sizeStyle}`}>
      {children}
    </div>
  );
}
