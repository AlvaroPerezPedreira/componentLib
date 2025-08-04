import React from "react";
import "./Card.css";
import { useCardContext } from "./context";

interface CardContentProps {
  children: React.ReactNode;
}

export function CardContent({ children }: CardContentProps) {
  const { sizeStyle } = useCardContext();

  return <div className={`card-info card-info--${sizeStyle}`}>{children}</div>;
}
