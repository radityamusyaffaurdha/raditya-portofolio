"use client";

/**
 * A slow, flowing wave band near the bottom of the viewport. Rendered as
 * a wide SVG shifted back and forth via a CSS animation (defined in
 * globals.css as .animate-wave-flow) so it loops seamlessly.
 */
export function Wave() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 -z-20 h-[40vh] overflow-hidden opacity-40"
    >
      <svg
        className="animate-wave-flow absolute bottom-0 h-full w-[150%]"
        viewBox="0 0 1600 400"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,250 C200,180 400,320 600,250 C800,180 1000,320 1200,250 C1400,180 1500,240 1600,220 L1600,400 L0,400 Z"
          fill="url(#wave-gradient)"
        />
        <defs>
          <linearGradient id="wave-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--aurora-1)" />
            <stop offset="50%" stopColor="var(--aurora-2)" />
            <stop offset="100%" stopColor="var(--aurora-3)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
