import { useEffect, type ReactNode } from "react";
import { X } from "lucide-react";

export function Modal({
  open,
  onClose,
  title,
  eyebrow,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  eyebrow?: string | undefined;
  children: ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-[65] flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="panel relative max-h-[88vh] w-full max-w-2xl overflow-y-auto p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-md border border-border bg-card p-2 text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <X className="size-5" aria-hidden="true" />
        </button>
        {eyebrow && (
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-secondary">{eyebrow}</p>
        )}
        <h3 className="pr-10 text-2xl font-bold">{title}</h3>
        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
}

// Clearly-marked DEMO placeholder shown wherever a real proof image has not
// been uploaded yet. Honest placeholder — never a fabricated certificate.
export function ProofPlaceholder({ label }: { label: string }) {
  return (
    <div className="grid-bg relative grid place-items-center rounded-xl border border-dashed border-secondary/40 bg-card-alt p-10 text-center">
      <div className="pointer-events-none absolute inset-0 grid place-items-center overflow-hidden rounded-xl">
        <span className="rotate-[-18deg] font-mono text-5xl font-extrabold tracking-widest text-secondary/10">
          DEMO
        </span>
      </div>
      <div className="relative">
        <p className="text-sm font-semibold text-foreground">{label}</p>
        <p className="mt-1 text-xs text-muted-foreground">
          Real file will replace this placeholder once uploaded.
        </p>
      </div>
    </div>
  );
}
