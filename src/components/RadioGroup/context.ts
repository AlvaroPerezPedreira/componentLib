import { createContext, useContext } from "react";
import { sizes, themes, variants } from "../../theme";

interface RadioGroupContextType {
  value: string;
  setValue: (value: string) => void;
  name: string;
  variant?: keyof typeof variants;
  theme?: keyof typeof themes;
  sizeStyle?: keyof typeof sizes;
}

export const RadioGroupContext = createContext<
  RadioGroupContextType | undefined
>(undefined);

export function useRadioGroupContext() {
  const context = useContext(RadioGroupContext);
  if (!context) {
    throw new Error("RadioGroup.Item must be used within a RadioGroup.Root");
  }
  return context;
}
