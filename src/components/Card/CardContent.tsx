import React from "react";
import "./Card.css";

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="card-info">{children}</div>;
}
