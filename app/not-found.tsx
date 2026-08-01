import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="eyebrow">404</p>
      <h1 className="font-display text-3xl font-bold">Page not found</h1>
      <p className="max-w-sm text-text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-2 inline-flex items-center gap-2 rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-[color:var(--bg)] shadow-glow transition-transform duration-300 hover:scale-[1.03]"
      >
        Back to Home
      </Link>
    </div>
  );
}
