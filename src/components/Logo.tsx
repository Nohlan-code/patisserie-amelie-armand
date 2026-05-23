type LogoProps = {
  size?: number;
  className?: string;
};

export function Logo({ size = 64, className = "" }: LogoProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background:
          "conic-gradient(from 220deg at 50% 50%, #d4be8e 0deg, #b89a5b 90deg, #8a7340 180deg, #c8aa6b 270deg, #d4be8e 360deg)",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.4)",
      }}
      aria-label="Pâtisserie Amélie Armand"
    >
      <div
        className="flex items-center justify-center rounded-full bg-background"
        style={{
          width: size - 6,
          height: size - 6,
        }}
      >
        <div className="flex flex-col items-center justify-center leading-none">
          <span
            className="font-serif text-foreground"
            style={{
              fontSize: size * 0.42,
              fontWeight: 500,
              letterSpacing: "-0.04em",
            }}
          >
            AA
          </span>
          <span
            className="font-serif text-foreground/60"
            style={{
              fontSize: size * 0.1,
              letterSpacing: "0.18em",
              marginTop: size * 0.04,
              textTransform: "uppercase",
            }}
          >
            Pâtisserie
          </span>
        </div>
      </div>
    </div>
  );
}
