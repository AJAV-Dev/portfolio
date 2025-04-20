export function ChemistryCodeIllustration() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Fondo circular con gradiente */}
        <circle cx="250" cy="250" r="240" fill="url(#circleGradient)" />

        {/* Estructura molecular */}
        <g className="chemistry-elements">
          {/* Átomo central */}
          <circle cx="250" cy="250" r="30" fill="#6366f1" />

          {/* Enlaces y átomos */}
          <line x1="250" y1="250" x2="350" y2="180" stroke="#6366f1" strokeWidth="6" />
          <circle cx="350" cy="180" r="20" fill="#6366f1" />

          <line x1="250" y1="250" x2="150" y2="180" stroke="#6366f1" strokeWidth="6" />
          <circle cx="150" cy="180" r="20" fill="#6366f1" />

          <line x1="250" y1="250" x2="350" y2="320" stroke="#6366f1" strokeWidth="6" />
          <circle cx="350" cy="320" r="20" fill="#6366f1" />

          <line x1="250" y1="250" x2="150" y2="320" stroke="#6366f1" strokeWidth="6" />
          <circle cx="150" cy="320" r="20" fill="#6366f1" />
        </g>

        {/* Elementos de código */}
        <g className="code-elements">
          {/* Corchetes */}
          <path d="M120 120 L150 120 L150 380 L120 380" stroke="#22c55e" strokeWidth="8" fill="none" />
          <path d="M380 120 L350 120 L350 380 L380 380" stroke="#22c55e" strokeWidth="8" fill="none" />

          {/* Líneas de código */}
          <rect x="170" y="160" width="160" height="10" rx="5" fill="#22c55e" />
          <rect x="170" y="190" width="120" height="10" rx="5" fill="#22c55e" />
          <rect x="170" y="220" width="140" height="10" rx="5" fill="#22c55e" />
          <rect x="170" y="250" width="100" height="10" rx="5" fill="#22c55e" />
          <rect x="170" y="280" width="160" height="10" rx="5" fill="#22c55e" />
          <rect x="170" y="310" width="130" height="10" rx="5" fill="#22c55e" />
        </g>

        {/* Definición del gradiente */}
        <defs>
          <radialGradient id="circleGradient" cx="50%" cy="50%" r="50%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#f0f9ff" />
            <stop offset="100%" stopColor="#e0f2fe" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}
