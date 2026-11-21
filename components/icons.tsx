type IconProps = {
  className?: string;
};

export function PawIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <circle cx="7" cy="7.5" r="2.2" />
      <circle cx="12" cy="5.5" r="2.2" />
      <circle cx="17" cy="7.5" r="2.2" />
      <path d="M12 10.5c-3.1 0-5.7 2.3-5.7 5.1 0 2 1.6 3.4 3.6 3.4 1 0 1.6-.4 2.1-.4s1.1.4 2.1.4c2 0 3.6-1.4 3.6-3.4 0-2.8-2.6-5.1-5.7-5.1Z" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}
