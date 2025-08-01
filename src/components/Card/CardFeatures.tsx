import "./Card.css";
import React, { isValidElement, ReactElement } from "react";
import { themes, variants } from "../../theme";
import { useCardContext } from "./context";

interface FeaturesProps {
  children: React.ReactNode;
  variant?: keyof typeof variants;
}

interface FeatureProps {
  children: React.ReactNode;
  variant?: keyof typeof variants;
}

export function CardFeatures({ children, variant }: FeaturesProps) {
  const { variant: contextVariant, sizeStyle } = useCardContext();
  const appliedVariant = variant ?? contextVariant ?? "default";
  const variantColors = variants[appliedVariant] || variants.default;

  function hasDisplayName(
    element: React.ReactElement
  ): element is React.ReactElement & { type: { displayName?: string } } {
    return (
      (typeof element.type === "function" ||
        typeof element.type === "object") &&
      "displayName" in element.type
    );
  }

  const enhancedChildren = React.Children.map(children, (child) => {
    if (
      isValidElement(child) &&
      hasDisplayName(child) &&
      child.type.displayName === "CardFeature"
    ) {
      if (!(child.props as { variant?: keyof typeof variants }).variant) {
        return React.cloneElement(
          child as ReactElement<{ variant?: keyof typeof variants }>,
          { variant: appliedVariant }
        );
      }
    }
    return child;
  });

  return (
    <div
      className={`card-feats card-feats--${sizeStyle}`}
      style={
        {
          "--variant-background": variantColors.highlight,
        } as React.CSSProperties
      }
    >
      {enhancedChildren}
    </div>
  );
}

export function CardFeature({ children, variant }: FeatureProps) {
  const { variant: contextVariant, sizeStyle } = useCardContext();
  const appliedVariant = variant ?? contextVariant ?? "default";
  const variantColors = variants[appliedVariant] || variants.default;

  return (
    <span
      className={`card-feat card-feat--${sizeStyle}`}
      style={
        {
          "--variant-background": variantColors.highlight,
        } as React.CSSProperties
      }
    >
      {children}
    </span>
  );
}

CardFeature.displayName = "CardFeature";
