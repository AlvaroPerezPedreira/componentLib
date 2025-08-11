import React from "react";
import "./Card.css";
import { useCardContext } from "./context";

interface CardImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export function CardImage({ src, alt, ...props }: CardImageProps) {
  const { sizeStyle } = useCardContext();

  return (
    <div className="card-tilt">
      <div className={`card-img card-img--${sizeStyle}`}>
        <img src={src} alt={alt} {...props} />
      </div>
    </div>
  );
}
