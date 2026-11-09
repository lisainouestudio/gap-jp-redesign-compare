import { createContext, useContext, type ReactNode } from "react";
import type { VariantId } from "./CompareContext";

const VariantContext = createContext<VariantId>("current");

export function VariantProvider({
  variant,
  children,
}: {
  variant: VariantId;
  children: ReactNode;
}) {
  return (
    <VariantContext.Provider value={variant}>{children}</VariantContext.Provider>
  );
}

export function useVariant() {
  return useContext(VariantContext);
}
