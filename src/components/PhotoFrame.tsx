import Image from "next/image";

/**
 * Drop your photo at /public/photos/<filename> and pass its path in `src`.
 * Until then this renders a clean placeholder frame so the layout is final.
 */
export default function PhotoFrame({
  src,
  alt,
  className = "",
}: {
  src?: string;
  alt: string;
  className?: string;
}) {
  if (!src) {
    return (
      <div
        className={`flex aspect-[4/5] w-full items-center justify-center border border-dashed border-surface-2 bg-surface ${className}`}
      >
        <p className="max-w-[70%] text-center font-mono text-xs text-muted">
          Add photo at /public/photos
        </p>
      </div>
    );
  }
  return (
    <div className={`relative aspect-[4/5] w-full overflow-hidden ${className}`}>
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}
