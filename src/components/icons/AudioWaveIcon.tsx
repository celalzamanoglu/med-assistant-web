interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

export function AudioWaveIcon({ color = "currentColor", ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 10v4" />
      <path d="M8 6v12" />
      <path d="M12 3v18" />
      <path d="M16 6v12" />
      <path d="M20 10v4" />
    </svg>
  );
}
