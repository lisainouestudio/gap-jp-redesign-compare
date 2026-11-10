import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
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

function pathFromHash() {
  const raw = window.location.hash.replace(/^#/, "");
  return raw.startsWith("/") ? raw : raw ? `/${raw}` : "/";
}

function hashFromPath(path: string) {
  return `#${path.startsWith("/") ? path : `/${path}`}`;
}

export function CompareProvider({ children }: { children: ReactNode }) {
  const [layout, setLayout] = useState<LayoutMode>("sideBySide");
  const [viewport, setViewport] = useState<ViewportMode>("desktop");
  const [showAnnotations, setShowAnnotations] = useState(true);
  const [syncedPath, setSyncedPathState] = useState(pathFromHash);
  const applyingFromHash = useRef(false);

  const setSyncedPath = useCallback((path: string) => {
    setSyncedPathState(path);
  }, []);

  // Shared / bookmarked / back-forward hash → drive both mock panes
  useEffect(() => {
    const onHashChange = () => {
      applyingFromHash.current = true;
      setSyncedPathState(pathFromHash());
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // In-mock navigation → update the shareable hash URL
  useEffect(() => {
    if (applyingFromHash.current) {
      applyingFromHash.current = false;
      return;
    }
    const next = hashFromPath(syncedPath);
    if (window.location.hash !== next) {
      window.history.replaceState(null, "", next);
    }
  }, [syncedPath]);

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
