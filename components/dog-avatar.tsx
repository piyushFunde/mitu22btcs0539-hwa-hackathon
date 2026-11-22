const variants = {
  tan: { bg: "#F5E9D8", fur: "#C98B58", ear: "#A96B3D", muzzle: "#F8EDDD" },
  brown: { bg: "#F0E4EC", fur: "#8B5E3C", ear: "#6E462B", muzzle: "#E9D6C3" },
  cream: { bg: "#EFE7F2", fur: "#E2C6A4", ear: "#C6A27A", muzzle: "#FBF3E6" },
};

type Variant = keyof typeof variants;

export function DogAvatar({ variant }: { variant: Variant }) {
  const colors = variants[variant];

  return (
    <svg viewBox="0 0 44 44" className="h-full w-full" aria-hidden="true">
      <rect width="44" height="44" fill={colors.bg} />
      <ellipse
        cx="11"
        cy="16"
        rx="4.5"
        ry="7"
        fill={colors.ear}
        transform="rotate(-24 11 16)"
      />
      <ellipse
        cx="33"
        cy="16"
        rx="4.5"
        ry="7"
        fill={colors.ear}
        transform="rotate(24 33 16)"
      />
      <ellipse cx="22" cy="23" rx="12" ry="11" fill={colors.fur} />
      <ellipse cx="22" cy="28" rx="7" ry="5.5" fill={colors.muzzle} />
      <circle cx="17.5" cy="21.5" r="1.5" fill="#2D1833" />
      <circle cx="26.5" cy="21.5" r="1.5" fill="#2D1833" />
      <ellipse cx="22" cy="26.5" rx="2" ry="1.4" fill="#2D1833" />
      <path
        d="M22 28v1.6M22 29.6c-.9 1.2-2.4 1.5-3.6.8M22 29.6c.9 1.2 2.4 1.5 3.6.8"
        stroke="#2D1833"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
