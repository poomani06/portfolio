import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface GalleryImage {
  src: string;
  alt: string;
}

export function Lightbox({
  images,
  index,
  onClose,
  onIndexChange,
  title,
}: {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onIndexChange: (i: number) => void;
  title: string;
}) {
  
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndexChange((index + 1) % images.length);
      if (e.key === "ArrowLeft") onIndexChange((index - 1 + images.length) % images.length);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [index, images.length, onClose, onIndexChange]);

  const current = images[index];
  if (!current) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="relative max-h-full w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <div className="mb-3 flex items-center justify-between">
          <p className="font-mono text-sm text-secondary">
            {title} <span className="text-muted-foreground">· {index + 1} / {images.length}</span>
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close image preview"
            className="rounded-md border border-border bg-card p-2 text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        <div className="relative">
          <img
            src={current.src}
            alt={current.alt}
            className="mx-auto max-h-[72vh] w-auto rounded-xl border border-border object-contain"
          />
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => onIndexChange((index - 1 + images.length) % images.length)}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-border bg-card/80 p-2 text-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary"
              >
                <ChevronLeft className="size-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onIndexChange((index + 1) % images.length)}
                aria-label="Next image"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-border bg-card/80 p-2 text-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary"
              >
                <ChevronRight className="size-5" aria-hidden="true" />
              </button>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {images.map((img, i) => (
              <button
                key={img.src + i}
                type="button"
                aria-label={`Show image ${i + 1}`}
                aria-current={i === index}
                onClick={() => onIndexChange(i)}
                className={`size-14 overflow-hidden rounded-md border transition-all ${
                  i === index ? "border-primary shadow-[var(--glow-primary)]" : "border-border opacity-60 hover:opacity-100"
                }`}
              >
                <img src={img.src} alt={img.alt} className="size-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
