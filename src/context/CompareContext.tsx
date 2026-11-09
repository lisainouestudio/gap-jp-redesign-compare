import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type LayoutMode = "sideBySide" | "improvedOnly";
export type ViewportMode = "desktop" | "mobile";
export type VariantId = "current" | "improved";

type CompareState = {
  layout: LayoutMode;
  viewport: ViewportMode;
  showAnnotations: boolean;
  syncedPath: string;
  setLayout: (v: LayoutMode) => void;
  setViewport: (v: ViewportMode) => void;
  setShowAnnotations: (v: boolean) => void;
  setSyncedPath: (path: string) => void;
};

const CompareContext = createContext<CompareState | null>(null);

export function CompareProvider({ children }: { children: ReactNode }) {
  const [layout, setLayout] = useState<LayoutMode>("sideBySide");
  const [viewport, setViewport] = useState<ViewportMode>("desktop");
  const [showAnnotations, setShowAnnotations] = useState(false);
  const [syncedPath, setSyncedPathState] = useState("/");

  const setSyncedPath = useCallback((path: string) => {
    setSyncedPathState(path);
  }, []);

  const value = useMemo(
    () => ({
      layout,
      viewport,
      showAnnotations,
      syncedPath,
      setLayout,
      setViewport,
      setShowAnnotations,
      setSyncedPath,
    }),
    [layout, viewport, showAnnotations, syncedPath, setSyncedPath],
  );

  return <CompareContext.Provider value={value}>{children}</CompareContext.Provider>;
}

export function useCompare() {
  const ctx = useContext(CompareContext);
  if (!ctx) throw new Error("useCompare must be used within CompareProvider");
  return ctx;
}
