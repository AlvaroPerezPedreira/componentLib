import { themes } from "../../theme";
import "./Card.css";
import { useCardContext } from "./context";

interface CardButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function CardButton({ children, icon, ...props }: CardButtonProps) {
  const { sizeStyle, theme } = useCardContext();

  const gradients = {
    light: "linear-gradient(45deg, #18181b, #27272a)",
    dark: "linear-gradient(45deg, #ffffff, #e0e0e0)",
  };

  const gradientsHover = {
    light: "linear-gradient(45deg, #27272a, #3f3f46)",
    dark: "linear-gradient(45deg, #dcdcdc, #bfbfbf)",
  };

  return (
    <button
      {...props}
      className={`card-btn card-btn--${sizeStyle}`}
      style={
        {
          "--text-color": themes[theme === "light" ? "dark" : "light"].color,
          "--theme-boxshadow": themes[theme ?? "light"].boxShadow,
          "--gradient": gradients[theme ?? "light"],
          "--gradient-hover": gradientsHover[theme ?? "light"],
        } as React.CSSProperties
      }
    >
      <span>{children}</span>
      {icon && (
        <span className={`card-icon card-icon--${sizeStyle}`}>{icon}</span>
      )}
    </button>
  );
}
