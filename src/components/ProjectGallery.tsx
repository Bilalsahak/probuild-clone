"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { type Photo, photos as allPhotos } from "@/content/photos";
import { servicesWithPhotos, type ServiceSlug } from "@/content/services";
import { useFocusTrap } from "@/lib/useFocusTrap";

type Filter = "all" | ServiceSlug;

const filters: Array<{ id: Filter; label: string }> = [
  { id: "all", label: "All trades" },
  ...servicesWithPhotos.map((s) => ({ id: s.slug as Filter, label: s.shortName })),
];

function tradeFromSearch(): Filter {
  if (typeof window === "undefined") return "all";
  const t = new URLSearchParams(window.location.search).get("trade");
  return filters.some((f) => f.id === t) ? (t as Filter) : "all";
}

export function ProjectGallery({
  images,
  showFilters = true,
}: {
  images?: Photo[];
  showFilters?: boolean;
}) {
  const source = images ?? allPhotos;
  const [trade, setTrade] = useState<Filter>("all");
  const [active, setActive] = useState<number | null>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Read ?trade= after mount (static export has no request-time search params).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (showFilters) setTrade(tradeFromSearch());
  }, [showFilters]);

  const filtered = useMemo(
    () => (trade === "all" ? source : source.filter((i) => i.trade === trade)),
    [source, trade]
  );

  function close() {
    setActive(null);
    openerRef.current?.focus?.();
  }

  return (
    <div>
      {showFilters ? (
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter photos by trade">
          {filters.map((f) => {
            const on = trade === f.id;
            return (
              <button
                key={f.id}
                type="button"
                aria-pressed={on}
                onClick={() => setTrade(f.id)}
                className={`min-h-11 rounded-full px-4 text-[11px] font-semibold uppercase tracking-[0.14em] transition ${
                  on
                    ? "bg-ink text-parchment"
                    : "bg-parchment-deep text-ink hover:bg-stone"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      ) : null}

      <p className="sr-only" role="status" aria-live="polite">
        {filtered.length} photos shown
      </p>

      <ul className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((img, idx) => (
          <li key={img.src} className="mb-4 break-inside-avoid">
            <button
              type="button"
              onClick={(e) => {
                openerRef.current = e.currentTarget;
                setActive(idx);
              }}
              aria-haspopup="dialog"
              aria-label={`Enlarge photo: ${img.caption}`}
              className="group relative block w-full overflow-hidden rounded-[2px] bg-parchment-deep text-left focus-visible:outline-offset-4"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="h-auto w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent px-3 pb-3 pt-10 text-[11px] font-semibold uppercase tracking-[0.12em] text-parchment">
                {img.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {filtered.length === 0 ? <p className="mt-8 text-charcoal/80">No photos for this filter yet.</p> : null}

      {active !== null && filtered[active] ? (
        <Lightbox
          photos={filtered}
          index={active}
          setIndex={setActive}
          onClose={close}
        />
      ) : null}
    </div>
  );
}

function Lightbox({
  photos,
  index,
  setIndex,
  onClose,
}: {
  photos: Photo[];
  index: number;
  setIndex: (fn: (i: number | null) => number | null) => void;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useFocusTrap(ref, true, onClose);
  const photo = photos[index];
  const n = photos.length;
  const go = (d: number) => setIndex((i) => (i === null ? i : (i + d + n) % n));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [n]);

  const btn =
    "min-h-11 rounded-[2px] border border-white/50 px-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-parchment hover:bg-white/10";

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink/95 p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label={`Photo viewer, image ${index + 1} of ${n}`}
        tabIndex={-1}
        className="flex max-h-full w-full max-w-5xl flex-col items-center gap-4"
      >
        <div className="flex w-full justify-end">
          <button type="button" onClick={onClose} aria-label="Close photo viewer" className={btn}>
            Close
          </button>
        </div>
        <div className="relative flex min-h-0 w-full flex-1 items-center justify-center">
          <Image
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes="90vw"
            className="max-h-[68svh] w-auto max-w-full rounded-[2px] object-contain"
            priority
          />
        </div>
        <p className="max-w-3xl text-center text-sm text-parchment/90">{photo.caption}</p>
        <div className="flex items-center gap-3">
          <button type="button" onClick={() => go(-1)} aria-label="Previous photo" className={btn}>
            Prev
          </button>
          <span className="px-2 text-[11px] uppercase tracking-[0.14em] text-parchment/80" aria-hidden>
            {index + 1} / {n}
          </span>
          <button type="button" onClick={() => go(1)} aria-label="Next photo" className={btn}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
