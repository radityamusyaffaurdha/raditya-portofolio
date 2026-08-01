"use client";

/**
 * A handful of small frosted-glass shapes drifting slowly in the
 * background — purely decorative, reinforces the premium/Apple-inspired
 * feel of the Monochrome Elegance theme in particular, but renders in
 * both themes since it's built from the shared .glass utility.
 */
interface FloatingShape {
  top: string;
  left?: string;
  right?: string;
  size: number;
  radius: string;
  anim: string;
}

const SHAPES: FloatingShape[] = [
  { top: "12%", left: "6%", size: 64, radius: "1.25rem", anim: "animate-float" },
  { top: "68%", left: "10%", size: 44, radius: "9999px", anim: "animate-float-delayed" },
  { top: "24%", right: "8%", size: 52, radius: "1rem", anim: "animate-float-delayed" },
  { top: "78%", right: "14%", size: 36, radius: "9999px", anim: "animate-float" },
];

export function FloatingGlass() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      {SHAPES.map((shape, i) => (
        <div
          key={i}
          className={`glass absolute opacity-40 ${shape.anim}`}
          style={{
            top: shape.top,
            left: shape.left,
            right: shape.right,
            width: shape.size,
            height: shape.size,
            borderRadius: shape.radius,
            animationDelay: `${i * 0.8}s`,
          }}
        />
      ))}
    </div>
  );
}
