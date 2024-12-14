export function DoctorIcon(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M32 16c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z"
        stroke="currentColor"
        strokeWidth="3"
        fillOpacity="0.2"
        fill="currentColor"
      />
      <path
        d="M44 48c0-6.6-5.4-12-12-12s-12 5.4-12 12"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M32 4C16.5 4 4 16.5 4 32s12.5 28 28 28 28-12.5 28-28S47.5 4 32 4zm0 52c-13.3 0-24-10.7-24-24S18.7 8 32 8s24 10.7 24 24-10.7 24-24 24z"
        fill="currentColor"
        fillOpacity="0.2"
      />
    </svg>
  );
}

export function AmbulanceIcon(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 44h40v-24H8v24zm32-12h-8v-8h8v8z"
        stroke="currentColor"
        strokeWidth="3"
        fillOpacity="0.2"
        fill="currentColor"
      />
      <circle cx="16" cy="44" r="4" stroke="currentColor" strokeWidth="3" />
      <circle cx="40" cy="44" r="4" stroke="currentColor" strokeWidth="3" />
      <path
        d="M48 44V28l8 4v12h-8z"
        stroke="currentColor"
        strokeWidth="3"
        fillOpacity="0.2"
        fill="currentColor"
      />
      <path d="M28 28v8m-4-4h8" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

export function MicrophoneIcon(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="24"
        y="8"
        width="16"
        height="28"
        rx="8"
        stroke="currentColor"
        strokeWidth="3"
        fillOpacity="0.2"
        fill="currentColor"
      />
      <path d="M16 28a16 16 0 0032 0" stroke="currentColor" strokeWidth="3" />
      <path d="M32 44v12" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

export function WritingHandIcon(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M44 24L24 44l-8-8 20-20 8 8z"
        stroke="currentColor"
        strokeWidth="3"
        fillOpacity="0.2"
        fill="currentColor"
      />
      <path
        d="M24 44l-8-8-4 12 12-4z"
        stroke="currentColor"
        strokeWidth="3"
        fillOpacity="0.2"
        fill="currentColor"
      />
      <path d="M40 20l4-4 8 8-4 4" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}
